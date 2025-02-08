import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "./utils/api.js";
import LandingPage from "./components/LandingPage.jsx";
import Header from "./components/Header.jsx";
import Login from "./Pages/Login/Login.jsx";
import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import { loginSuccess, logout } from "./store/auth.js";
import Registration from "./Pages/Registration/Registration.jsx";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated::::: ", isAuthenticated);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        api
          .get("/user/verify-token")
          .then((res) => {
            console.log("resssssssssssss ", res);
            dispatch(loginSuccess(res.data.user));
            navigate("/home", { replace: true });
          })
          .catch(() => {
            localStorage.removeItem("authToken");
            dispatch(logout());
            navigate("/login", { replace: true });
            console.log("error while verifying token");
          });
      } catch (error) {
        console.log("Invalid token:", error);
        console.error("Invalid token:", error);
        localStorage.removeItem("authToken");
      }
    } else {
      navigate("/login", { replace: true });
    }
  }, [dispatch]);

  return (
    <div>
      <>
        {isAuthenticated && <Header isLogin={isAuthenticated} />}
        <div>
          <Routes>
            <Route
              index
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/home" />
                ) : (
                  <Navigate to="/registration" />
                )
              }
            />
            <Route path="/registration" element={<Registration />} />
            <Route
              index
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/home" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  {" "}
                  <LandingPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </>
    </div>
  );
};

export default App;
