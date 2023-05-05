import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protected from "./Protected";
import LoginPage from "./pages/usersPage/LoginPage";
import SuperAdminPage from "./pages/usersPage/SuperAdminPage";
import AdminPage from "./pages/usersPage/AdminPage";
import PartnerPage from "./pages/usersPage/PartnerPage";

function App() {
  // Protected Routes (2023/02/04)
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" element={<LoginPage onLogin={logIn} />} />

        <Route
          path="/partner/:id/*"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <PartnerPage onLogout={logOut} />
            </Protected>
          }
        />
        <Route
          path="/superadmin/:id/*"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <SuperAdminPage onLogout={logOut} />
            </Protected>
          }
        />
        <Route
          path="/admin/:id/*"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AdminPage onLogout={logOut} />
            </Protected>
          }
        />
        {/* <Route path="notifications" element={<NotificationBox />} /> */}
        {/* <Route exact path="/" element={<LoginPage />} />
        <Route path="/superadmin/:id/*" element={<SuperAdminPage />} />
        <Route path="/admin/:id/*" element={<AdminPage />} />
        <Route path="/partner/:id/*" element={<PartnerPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
