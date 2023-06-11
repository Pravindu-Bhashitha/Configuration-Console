// import React, { useState } from "react";
// /*
// const PartnerPage = () => {
//   return <div>Partner Page</div>;
// };

// export default PartnerPage;
// */

// import { ColorModeContext, useMode } from "../../theme";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { Routes, Route } from "react-router-dom";
// import { MyProSidebarProvider } from "../global/sidebar/sidebarContext";
// import Topbar from "../global/Topbar";
// import Partnerdashboard from "../dashboard/PartnerDashboard";
// import Project from "../project";
// import Assignment from "../assignment";
// import Smtp from "../smpt";
// import ClientDetailsnew from "../clientDetails/ClientDeatailsnew";
// import NotificationBox from "../../components/NotificationBox";
// import ConsoleManagement from "../consoleDashboard/ConsoleManagement";
// const PartnerPage = (props) => {
//   const [theme, colorMode] = useMode();
//   const [searchTerm, setSearchTerm] = useState("");

//   // Protected Routes (2023/02/04)
//   const logOut = () => {
//     props.onLogout();
//   };
//   return (
//     <div className="whole">
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <MyProSidebarProvider>
//           <div style={{ height: "100%", width: "100%" }}>
//             <main>
//               <Topbar onlogOut={logOut} />
//               <Routes>
//                 <Route path="/" element={<Partnerdashboard />} />
//                 <Route path="clientDetails" element={<ClientDetailsnew />} />
//                 <Route path="clientDetails/*" element={<ConsoleManagement />} />
//                 <Route path="project" element={<Project />} />
//                 <Route path="assignment" element={<Assignment />} />
//                 <Route path="smtp" element={<Smtp />} />
//                 <Route
//                   path="clientDetails/notifications"
//                   element={<NotificationBox />}
//                 />
//               </Routes>
//             </main>
//           </div>
//         </MyProSidebarProvider>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default PartnerPage;
import React from "react";

import { useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "../global/sidebar/sidebarContext";
import Topbar from "../global/Topbar";
import Partnerdashboard from "../dashboard/PartnerDashboard";
import Project from "../project";
import Assignment from "../assignment";
import Smtp from "../smpt";
import ConsoleManagement from "../consoleDashboard/ConsoleManagement";
import ProfileManagement from "../profile/ProfileManagement";
import ClientProfile from "../../components/ProfileDetails/ClientProfile";

const PartnerPage = (props) => {
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
                <Route path="/" element={<Partnerdashboard />} />
                <Route path="clientDetails/*" element={<ConsoleManagement />} />
                <Route path="project" element={<Project />} />
                <Route path="assignment" element={<Assignment />} />
                <Route path="smtp" element={<Smtp />} />
                <Route path="myProfile/*" element={<ProfileManagement />} />
                <Route
                path="clientDetails/clientmoredetails" element={<ClientProfile/>}
                />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default PartnerPage;
