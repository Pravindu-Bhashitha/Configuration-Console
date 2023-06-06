import React from "react";

import { useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Profile from "../profile/Profile";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
const PartnerPage = (props) => {
  const [theme, colorMode] = useMode();

  return (
    <div className="whole">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ height: "100%", width: "100%" }}>
          <main>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="changePassword" element={<ChangePassword />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default PartnerPage;
