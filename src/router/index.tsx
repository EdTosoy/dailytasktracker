import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import MainLayout from '../components/Layout/MainLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import WorkList from '../pages/WorkList/WorkList';
import { ROUTES } from '../constants';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.DASHBOARD_MAIN} element={<MainLayout />}>
          <Route path={ROUTES.DASHBOARD_INDEX} element={<Dashboard />} />
          <Route path={ROUTES.ADMIN_WORK_LIST} element={<WorkList />} />
          <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
        </Route>

        {/* Fallback Route */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
