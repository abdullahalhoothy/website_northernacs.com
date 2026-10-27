#!/usr/bin/env bash
set -euo pipefail

SITE_NAME="dev.northernacs.com"
SITE_AVAILABLE="/etc/nginx/sites-available/${SITE_NAME}"
SITE_ENABLED="/etc/nginx/sites-enabled/${SITE_NAME}"
REMOTE_TMP="/tmp/${SITE_NAME}.conf.new"
HTTP_CONF="deploy/nginx/${SITE_NAME}.http.conf"
FULL_CONF="deploy/nginx/${SITE_NAME}.conf"

SSH_OPTS=(-o IdentitiesOnly=yes -o ServerAliveInterval=30 -o ServerAliveCountMax=4)

require_env() {
  local name
  for name in "$@"; do
    if [[ -z "${!name:-}" ]]; then
      echo "Required environment variable ${name} is not set." >&2
      exit 1
    fi
  done
}

ssh_vps() {
  ssh "${SSH_OPTS[@]}" "${VPS_HOST}" "$@"
}

rsync_to_vps() {
  local src="$1"
  local dest="$2"
  rsync -e "ssh ${SSH_OPTS[*]}" -az "${src}" "${VPS_HOST}:${dest}"
}

install_site_from_tmp() {
  ssh_vps bash -s <<REMOTE
set -euo pipefail
SITE_AVAILABLE="${SITE_AVAILABLE}"
SITE_ENABLED="${SITE_ENABLED}"
REMOTE_TMP="${REMOTE_TMP}"
BAK="\${SITE_AVAILABLE}.bak"

mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled /var/www/certbot

if [[ -f "\${SITE_AVAILABLE}" ]]; then
  cp -a "\${SITE_AVAILABLE}" "\${BAK}"
fi

cp "\${REMOTE_TMP}" "\${SITE_AVAILABLE}"
ln -sfn "\${SITE_AVAILABLE}" "\${SITE_ENABLED}"

if ! nginx -t; then
  if [[ -f "\${BAK}" ]]; then
    mv "\${BAK}" "\${SITE_AVAILABLE}"
  else
    rm -f "\${SITE_ENABLED}" "\${SITE_AVAILABLE}"
  fi
  nginx -t || true
  exit 1
fi

systemctl reload nginx
rm -f "\${BAK}" "\${REMOTE_TMP}"
REMOTE
}

cert_exists() {
  ssh_vps "test -f '${CERT_PATH}'"
}

install_http_bootstrap() {
  if [[ ! -f "${HTTP_CONF}" ]]; then
    echo "Missing local nginx bootstrap config: ${HTTP_CONF}" >&2
    exit 1
  fi
  rsync_to_vps "${HTTP_CONF}" "${REMOTE_TMP}"
  install_site_from_tmp
}

run_certbot() {
  require_env CERTBOT_EMAIL
  # shellcheck disable=SC2029
  ssh_vps \
    "certbot certonly --webroot -w '${CERTBOT_WEBROOT}' \
      -d '${SITE_NAME}' \
      --non-interactive --agree-tos \
      --email '${CERTBOT_EMAIL}' \
      --keep-until-expiring"
}

install_full_ssl() {
  if [[ ! -f "${FULL_CONF}" ]]; then
    echo "Missing local nginx config: ${FULL_CONF}" >&2
    exit 1
  fi
  rsync_to_vps "${FULL_CONF}" "${REMOTE_TMP}"
  install_site_from_tmp
}

main() {
  local script_dir repo_root
  script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  repo_root="$(cd "${script_dir}/../.." && pwd)"
  cd "${repo_root}"

  require_env VPS_HOST CERTBOT_WEBROOT CERT_PATH

  if ! cert_exists; then
    echo "No TLS cert yet — bootstrap HTTP, then certbot"
    install_http_bootstrap
    run_certbot
  else
    echo "TLS cert already present — skip bootstrap and certbot"
  fi

  install_full_ssl
  echo "nginx site for ${SITE_NAME} installed"
}

main "$@"
