import { Dashboard } from "./components/Dashboard";
import "./App.css";
import { Home } from "./components/layout/Home";
import { Routes, Route, Navigate } from "react-router";
import { Leaves } from "./components/Leaves";
import { LeaveSummary } from "./components/LeaveSummary";
import { Profile } from "./components/Profile";
import { Login } from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
const isLoggedIn = localStorage.getItem("loggedIn");

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Home>
        <Routes>
          {isLoggedIn !== null ? (
            <Route
              path={"*" || "/login"}
              element={<Navigate to="/dashboard" />}
            />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}

          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
            path="/leaves"
            element={<ProtectedRoute element={<Leaves />} />}
          />
          <Route
            path="/leave-summary"
            element={<ProtectedRoute element={<LeaveSummary />} />}
          />
          <Route
            path="/my-profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </Home>
    </>
  );
}

export default App;
