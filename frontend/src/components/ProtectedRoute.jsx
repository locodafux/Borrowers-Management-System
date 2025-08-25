// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const ProtectedRoute = () => {
  const [auth, setAuth] = useState(null); // null = still checking, true/false = result

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/users/me", {
          withCredentials: true,
        });
        if (res.data?.user) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (err) {
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (auth === null) return <p>Loading...</p>; // optional spinner

  return auth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
