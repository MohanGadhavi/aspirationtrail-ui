import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from './utils/api.js';
import Login from './Pages/Login/Login.jsx';
import ProtectedRoute from './Routes/ProtectedRoute.jsx';
import { loginSuccess, logout } from './store/auth.js';
import LandingPage from './Pages/LandingPage/index.jsx';
import Home from './Pages/Home/index.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import Mentor from './Pages/Mentor/Mentor.jsx';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log('isAuthenticated::::: ', isAuthenticated);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        api
          .get('/user/verify-token')
          .then((res) => {
            console.log('resssssssssssss ', res);
            dispatch(loginSuccess(res.data.user));
            navigate('/home', { replace: true });
          })
          .catch(() => {
            localStorage.removeItem('authToken');
            dispatch(logout());
            navigate('/login', { replace: true });
            console.log('error while verifying token');
          });
      } catch (error) {
        console.log('Invalid token:', error);
        console.error('Invalid token:', error);
        localStorage.removeItem('authToken');
      }
    } else {
      navigate('/welcome', { replace: true });
    }
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          index
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Navigate to="/welcome" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/welcome" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/mentor" element={<Mentor />} />
      </Routes>
    </div>
  );
};

export default App;
