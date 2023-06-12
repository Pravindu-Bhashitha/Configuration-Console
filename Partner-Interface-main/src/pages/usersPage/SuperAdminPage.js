import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMode } from "../../theme";
import SuperAdminDashboard from "../dashboard/SuperAdminDashboard";
import { MyProSidebarProvider } from "../global/sidebar/sidebarContext";
import Topbar from "../global/Topbar";
import ClientProfileManagment from "../Register/clientprofilemanagement";
import RegisterNewClient from "../Register/registerNewClient";
import RegisterNewPartner from "../Register/registerNewPartner";
import RegisterNewAdmin from "../Register/registerNewAdmin";
import AdminDetails from "../getAllDetails/AdminDetails";
import AllPartnerDetails from "../getAllDetails/AllPartnerDetails";
import AllClientDetails from "../getAllDetails/AllClientDetails";
import ProfileManagement from "../profile/ProfileManagement";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import Access from "../../components/AccessTable";
import ClientProfile from "../../components/ProfileDetails/ClientProfile";
import PartnerProfile from "../../components/ProfileDetails/PartnerProfile";
import AdminProfile from "../../components/ProfileDetails/AdminProfile";
import ConsoleManagement from "../consoleDashboard/ConsoleManagement";
import AdminDashboard from "../dashboard/AdminDashbord";
import PartnerDashboard from "../dashboard/PartnerDashboard";
const SuperAdminPage = (props) => {
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
                <Route path="" element={<SuperAdminDashboard />} />
                <Route path="alladmins" element={<AdminDetails />} />
                <Route path="allpartners" element={<AllPartnerDetails />} />
                <Route path="allclients" element={<AllClientDetails />} />
                <Route path="registernewadmin" element={<RegisterNewAdmin />} />
                <Route
                  path="registernewpartner/*"
                  element={<RegisterNewPartner />}
                />
                <Route
                  path="registernewclient"
                  element={<RegisterNewClient />}
                />
                <Route
                  path="clientprofilemanagement"
                  element={<ClientProfileManagment />}
                />
                <Route path="myProfile/*" element={<ProfileManagement />} />
                <Route path="registernewpartner/access" element={<Access />} />
                <Route
                  path="allclients/notifications"
                  element={<NotificationBox />}
                />
                <Route
                  path="allpartners/notifications"
                  element={<NotificationBox />}
                />
                <Route
                  path="alladmins/notifications"
                  element={<NotificationBox />}
                />
                <Route
                path="allclients/clientmoredetails" element={<ClientProfile/>}
                />
                <Route
                path="allpartners/partnermoredetails" element={<PartnerProfile/>}
                />
                <Route
                path="alladmins/adminmoredetails" element={<AdminProfile/>}
                />
                <Route path="allclients/*" element={<ConsoleManagement />} />
                <Route
                path="alladmins/*" element={<AdminDashboard/>}
                />
                <Route
                path="allpartners/*" element={<PartnerDashboard/>}
                />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default SuperAdminPage;
