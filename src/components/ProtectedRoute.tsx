import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{
  element: React.ReactNode;
}> = ({ element }) => {
  const isLoggedIn = localStorage.getItem("loggedIn");
  return (
    <React.Fragment>
      {isLoggedIn !== null ? <>{element}</> : <Navigate to="/login" replace />}
    </React.Fragment>
  );
};

export default ProtectedRoute;
