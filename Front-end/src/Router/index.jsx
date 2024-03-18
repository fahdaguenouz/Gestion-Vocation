// DynamicRouter.jsx

import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/login";
import Personnel from "../Pages/Personnel";
import Budget from "../Pages/budget";
import Notfound from "../Pages/Notfound";
import Layout from "../layouts/layout";
import GuestLayout from "../layouts/GuestLayout";
import AuthContext from "../context/AuthProvider";

const DynamicRouter = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {authenticated ? (
          // Authenticated user routes
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="personnel" element={<Personnel />} />
            <Route path="budget" element={<Budget />} />
            {/* Redirect or navigate to dashboard if an authenticated user hits the login page */}
            <Route path="login" element={<Navigate replace to="/dashboard" />} />
            <Route path="*" element={<Notfound />} />
            
          </Route>
        ) : (
          // Guest routes
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default DynamicRouter;
