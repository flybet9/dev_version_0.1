import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./components/login/AdminLogin";
import AdminHome from "./components/dashboard/AdminHome";
import UserLogin from "./components/login/UserLogin";
import UserHome from "./components/dashboard/UserHome";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedValue = localStorage.getItem("isAuthenticated");
    return storedValue ? JSON.parse(storedValue) : false;
  });
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/adminLogin" element={<AdminLogin setIsAuthenticated={setIsAuthenticated}/>} />
        <Route
          path="/login/admin"
          element={
            isAuthenticated ? <AdminHome /> : <AdminLogin setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route
          path="/user/user"
          element={
            isAuthenticated ? <UserHome /> : <Navigate to="/login/user" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
