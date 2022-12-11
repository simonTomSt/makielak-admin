import { ProtectedRoute, Routes } from 'router';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { AuthProvider } from './providers';
import { LoginPage } from './pages/login';
import { DashboardPage } from 'pages/dashboard';
import { PanelLayout } from 'layouts';
import { CookiesProvider } from 'react-cookie';
import { queryClient, Role } from 'api';
import { NotFoundPage } from 'pages/not-found';
import { HomePageContent } from 'pages/content';
import { UsersPage } from 'pages/users';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { EditMyData } from 'pages/settings';
import { EditMyPassword } from 'pages/settings/edit-my-password/EditMyPassword';

function App() {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <AuthProvider>
          <RouterRoutes>
            <Route index element={<LoginPage />} />
            <Route path={Routes.dashboard} element={<PanelLayout />}>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={Routes.homePageContent}
                element={
                  <ProtectedRoute roles={[Role.SuperAdmin, Role.Admin]}>
                    <HomePageContent />
                  </ProtectedRoute>
                }
              />
              <Route
                path={Routes.aboutUs}
                element={
                  <ProtectedRoute roles={[Role.SuperAdmin, Role.Admin]}>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={Routes.services}
                element={
                  <ProtectedRoute roles={[Role.SuperAdmin, Role.Admin]}>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={Routes.certificates}
                element={
                  <ProtectedRoute roles={[Role.SuperAdmin, Role.Admin]}>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={Routes.contact}
                element={
                  <ProtectedRoute roles={[Role.SuperAdmin, Role.Admin]}>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={Routes.users}
                element={
                  <ProtectedRoute roles={[Role.SuperAdmin]}>
                    <UsersPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={Routes.editMyData}
                element={
                  <ProtectedRoute roles={[Role.SuperAdmin]}>
                    <EditMyData />
                  </ProtectedRoute>
                }
              />
              <Route
                path={Routes.editMyPass}
                element={
                  <ProtectedRoute roles={[Role.SuperAdmin]}>
                    <EditMyPassword />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </RouterRoutes>
        </AuthProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
