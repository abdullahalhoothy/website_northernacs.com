import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import AboutPage from './pages/AboutPage';
import BlogDetailPage from './pages/BlogDetailPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import DatabricksConsultingPage from './pages/DatabricksConsultingPage';
import SRoutePage from './pages/SRoutePage';
import SLocatorPage from './pages/SLocatorPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:slug" element={<BlogDetailPage />} />
        <Route path="en/blogs/:slug" element={<BlogDetailPage />} />
        <Route path="solutions/consulting-databricks" element={<DatabricksConsultingPage />} />
        <Route path="solutions/s-route" element={<SRoutePage />} />
        <Route path="solutions/s-locator" element={<SLocatorPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
