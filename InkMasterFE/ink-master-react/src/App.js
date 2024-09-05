import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './features/dashboard/Dashboard';
import ProductsList from './ProductsList';
import Login from './features/auth/Login';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  const location = useLocation();
  
  // Quản lý trạng thái đăng nhập
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Kiểm tra trạng thái đăng nhập khi tải trang
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated');
    if (isLoggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const isLoginPage = location.pathname === '/' || location.pathname === '/login'; 

  return (
    <div className={`app-container ${isLoginPage ? 'no-sidebar' : ''}`}>
      {/* Chỉ hiện Sidebar khi không phải trang login */}
      {!isLoginPage && isAuthenticated && <Sidebar />}
      <div className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/products" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ProductsList />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
