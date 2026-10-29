import type { ChangeEvent, ChangeEventHandler, FormEvent } from 'react';
import { useState } from 'react';
import { FaCircleCheck, FaLinkedinIn, FaPaperPlane, FaWhatsapp } from 'react-icons/fa6';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { toast } from 'sonner';
import { useLanguage } from '../components/LanguageProvider';
import { translations } from '../i18n';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  comments: string;
}
type FieldName = keyof FormState;
type FormErrors = Partial<Record<FieldName, string>>;

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  company: '',
  comments: '',
};
const PHONE_HREF = 'tel:+966558188632';
const PHONE_LABEL = '+966 55 818 8632';
const EMAIL = 'contact@northernacs.com';
const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/northern-analytic',
  whatsapp: 'https://wa.me/966558188632',
};
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRx = /^[0-9()#&+*\-=. ]+$/;
const fieldBase =
  'w-full rounded-md border border-nacs-line bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-all focus:border-nacs-green focus:outline-none focus:ring-2 focus:ring-nacs-green/15 dark:border-[#5c5c5a] dark:bg-[#2b2b2a] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/20';

const ContactPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const v = t.validation;
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (nextValues: FormState): FormErrors => {
    const found: FormErrors = {};
    if (!nextValues.firstName.trim()) found.firstName = v.firstNameRequired;
    if (!nextValues.lastName.trim()) found.lastName = v.lastNameRequired;
    if (!nextValues.email.trim()) found.email = v.emailRequired;
    else if (!emailRx.test(nextValues.email.trim())) found.email = v.emailInvalid;
    if (nextValues.phone.trim() && !phoneRx.test(nextValues.phone.trim()))
      found.phone = v.phoneInvalid;
    if (!nextValues.location.trim()) found.location = v.locationRequired;
    if (!nextValues.comments.trim()) found.comments = v.commentsRequired;
    else if (nextValues.comments.trim().length < 10) found.comments = v.commentsMinLength;
    return found;
  };

  const onChange =
    (field: FieldName) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length) {
      setErrors(found);
      toast.error(t.review);
      return;
    }
    setSubmitting(true);
    try {
      // TODO(contact): Replace with real API call — simulated delay for UI only.
      await new Promise((resolve) => setTimeout(resolve, 700));
      toast.success(t.sent);
      setValues(initialState);
      setSubmitted(true);
    } catch {
      toast.error(t.error);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (field: FieldName) =>
    `${fieldBase} ${errors[field] ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`;

  const titleWords = t.title.trim().split(/\s+/);
  const titleAccent = titleWords.pop() ?? '';
  const titleLead = titleWords.join(' ');

  return (
    <>
      <section className="bg-white pb-10 pt-6 dark:bg-darkBg md:pb-6 md:pt-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-[#7E5CAC]/10 bg-nacs-sandSoft px-4 py-2 text-sm font-bold text-[#7E5CAC] dark:bg-[#7E5CAC]/20 dark:text-[#d4c4f0]">
            {t.eyebrow}
          </span>

          <h1 className="mt-4 text-3xl font-medium leading-tight text-[#08563D] dark:text-white md:text-4xl">
            {titleLead ? `${titleLead} ` : null}
            <span className="text-[#7E5CAC] dark:text-[#d4c4f0]">{titleAccent}</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-6 text-nacs-caption dark:text-slate-300">
            {t.intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-10 dark:bg-darkBg md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-nacs-line bg-white shadow-2xl shadow-slate-300/50 dark:border-[#484846] dark:bg-[#3e3e3d] dark:shadow-black/40 lg:grid-cols-2">
            <aside className="flex h-full flex-col bg-nacs-green p-8 text-white md:p-12">
              <h2 className="mb-8 text-2xl font-medium md:text-3xl">{t.infoTitle}</h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <FiPhone size={20} className="text-[#ccb28d]" />
                  </span>
                  <div>
                    <p className="font-medium">{t.callLabel}</p>
                    <a
                      href={PHONE_HREF}
                      dir="ltr"
                      className={`mt-1 block text-xs text-white/90 ${
                        lang === 'ar' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {PHONE_LABEL}
                    </a>
                    <p className="mt-1 text-xs text-white/60">{t.hours}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <FiMail size={20} className="text-[#ccb28d]" />
                  </span>
                  <div>
                    <p className="font-medium">{t.emailLabel}</p>
                    <a href={`mailto:${EMAIL}`} className="mt-1 block text-xs text-white/90">
                      {EMAIL}
                    </a>
                    <p className="mt-1 text-xs text-white/60">{t.replyTime}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <FiMapPin size={20} className="text-[#ccb28d]" />
                  </span>
                  <div>
                    <p className="font-medium">{t.hqLabel}</p>
                    <p className="mt-1 text-xs text-white/90">{t.address}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-auto flex items-center gap-3 pt-10">
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.linkedinAria}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <FaLinkedinIn size={15} />
                </a>
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/20"
                >
                  <FaWhatsapp size={16} />
                  {t.whatsapp}
                </a>
              </div>
            </aside>
            <div className="p-6 sm:p-8 md:p-12">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-nacs-mint text-nacs-green">
                    <FaCircleCheck size={32} />
                  </div>
                  <h3 className="mb-2 text-2xl font-black text-slate-900 dark:text-white">
                    {t.successTitle}
                  </h3>
                  <p className="mx-auto mb-6 max-w-md text-nacs-muted dark:text-slate-300">
                    {t.successText}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-md bg-nacs-green px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-nacs-greenHover"
                  >
                    {t.again}
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={onSubmit} className="space-y-5">
                  <h2 className="text-2xl font-medium text-nacs-green dark:text-white">
                    {t.formTitle}
                  </h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium text-nacs-green dark:text-white"
                      >
                        {t.firstName}
                      </label>
                      <Field
                        name="firstName"
                        id="firstName"
                        placeholder={t.firstName}
                        value={values.firstName}
                        onChange={onChange('firstName')}
                        error={errors.firstName}
                        className={fieldClass('firstName')}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-nacs-green dark:text-white"
                      >
                        {t.lastName}
                      </label>
                      <Field
                        name="lastName"
                        id="lastName"
                        placeholder={t.lastName}
                        value={values.lastName}
                        onChange={onChange('lastName')}
                        error={errors.lastName}
                        className={fieldClass('lastName')}
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-nacs-green dark:text-white"
                      >
                        {t.email}
                      </label>
                      <Field
                        name="email"
                        id="email"
                        type="email"
                        placeholder={t.email}
                        value={values.email}
                        onChange={onChange('email')}
                        error={errors.email}
                        className={fieldClass('email')}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-nacs-green dark:text-white"
                      >
                        {t.phone}
                      </label>
                      <Field
                        name="phone"
                        id="phone"
                        type="tel"
                        placeholder={t.phone}
                        value={values.phone}
                        onChange={onChange('phone')}
                        error={errors.phone}
                        className={fieldClass('phone')}
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="location"
                        className="text-sm font-medium text-nacs-green dark:text-white"
                      >
                        {t.location}
                      </label>
                      <Field
                        name="location"
                        id="location"
                        placeholder={t.location}
                        value={values.location}
                        onChange={onChange('location')}
                        error={errors.location}
                        className={fieldClass('location')}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-nacs-green dark:text-white"
                      >
                        {t.company}
                      </label>
                      <Field
                        name="company"
                        id="company"
                        placeholder={t.company}
                        value={values.company}
                        onChange={onChange('company')}
                        className={fieldClass('company')}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="comments"
                      className="text-sm font-medium text-nacs-green dark:text-white"
                    >
                      {t.comments}
                    </label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows={5}
                      placeholder={t.comments}
                      value={values.comments}
                      onChange={onChange('comments')}
                      className={`${fieldClass('comments')} min-h-[140px] resize-y`}
                    />
                  </div>
                  {errors.comments && <p className="text-xs text-red-500">{errors.comments}</p>}
                  <div className="flex flex-col gap-4 pt-2">
                    {/* <p className="text-xs text-slate-400">{t.required}</p> */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-nacs-green px-10 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-nacs-forestHover disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? t.submitting : t.submit}
                      {!submitting && <FaPaperPlane className="ms-3" size={13} />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Field = ({
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  className,
}: {
  name: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  className: string;
}) => (
  <div>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-invalid={Boolean(error)}
      className={className}
    />
    {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
  </div>
);

export default ContactPage;
