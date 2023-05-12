import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMode } from "../../theme";
import { MyProSidebarProvider } from "../global/sidebar/sidebarContext";
import Topbar from "../global/Topbar";
import AdminDashboard from "../dashboard/AdminDashbord";
import PartnerDetails from "../partnerDetails/PartnerDetails";
import NewClient from "../newClient/NewClient";
import NotificationBox from "../../components/NotificationBox";

const AdminPage = (props) => {
  const [theme, colorMode] = useMode();

  // Protected Routes (2023/02/04)
  const logOut = () => {
    props.onLogout();
  };

  return (
    <div className="whole">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar onlogOut={logOut} />
              <Routes>
                <Route path="" element={<AdminDashboard />} />
                <Route path="newPartner" element={<PartnerDetails />} />
                <Route path="newClient" element={<NewClient />} />
                <Route
                  path="newPartner/notifications"
                  element={<NotificationBox />}
                />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default AdminPage;
