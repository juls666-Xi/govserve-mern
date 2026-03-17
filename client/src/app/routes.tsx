import { createBrowserRouter, Navigate } from 'react-router';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Layout } from './components/Layout';

// Public pages
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { MedicalAssistancePage } from './pages/MedicalAssistancePage';
import { LivelihoodAssistancePage } from './pages/LivelihoodAssistancePage';
import { EducationalAssistancePage } from './pages/EducationalAssistancePage';
import { HousingAssistancePage } from './pages/HousingAssistancePage';
import { FAQPage } from './pages/FAQPage';
import { RequirementsPage } from './pages/RequirementsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Auth pages
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';

// Applicant pages
import { ApplicantDashboard } from './pages/ApplicantDashboard';
import { ApplyPage } from './pages/ApplyPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ApplicationDetailsPage } from './pages/ApplicationDetailsPage';
import { AppointmentsPage } from './pages/AppointmentsPage';

// Admin pages
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminApplications } from './pages/AdminApplications';
import { AdminReports } from './pages/AdminReports';
import { AdminAppointments } from './pages/AdminAppointments';
import { AdminUsers } from './pages/AdminUsers';

// Shared pages
import { NotificationsPage } from './pages/NotificationsPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/programs',
    element: <ProgramsPage />,
  },
  {
    path: '/programs/medical',
    element: <MedicalAssistancePage />,
  },
  {
    path: '/programs/livelihood',
    element: <LivelihoodAssistancePage />,
  },
  {
    path: '/programs/educational',
    element: <EducationalAssistancePage />,
  },
  {
    path: '/programs/housing',
    element: <HousingAssistancePage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/requirements',
    element: <RequirementsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute allowedRoles={['applicant']}>
        <Layout>
          <ApplicantDashboard />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/apply',
    element: (
      <ProtectedRoute allowedRoles={['applicant']}>
        <Layout>
          <ApplyPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/applications',
    element: (
      <ProtectedRoute allowedRoles={['applicant']}>
        <Layout>
          <ApplicationsPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/applications/:id',
    element: (
      <ProtectedRoute allowedRoles={['applicant']}>
        <Layout>
          <ApplicationDetailsPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/appointments',
    element: (
      <ProtectedRoute allowedRoles={['applicant']}>
        <Layout>
          <AppointmentsPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'staff']}>
        <Layout>
          <AdminDashboard />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/applications',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'staff']}>
        <Layout>
          <AdminApplications />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/applications/:id',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'staff']}>
        <Layout>
          <ApplicationDetailsPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/appointments',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'staff']}>
        <Layout>
          <AdminAppointments />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/reports',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'staff']}>
        <Layout>
          <AdminReports />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/users',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'staff']}>
        <Layout>
          <AdminUsers />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/notifications',
    element: (
      <ProtectedRoute>
        <Layout>
          <NotificationsPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Layout>
          <ProfilePage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings',
    element: (
      <ProtectedRoute>
        <Layout>
          <SettingsPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);