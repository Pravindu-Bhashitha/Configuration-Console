import React from "react";
import { useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ClientDetails from "../clientDetails/ClientDeatailsnew";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import ConsoleOptions from "./ConsoleOptions";

const ConsoleManagement = (props) => {
  const [theme, colorMode] = useMode();

  return (
    <div className="whole">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ height: "100%", width: "100%" }}>
          <main>
            <Routes>
              <Route path="/" element={<ClientDetails />} />
              <Route path="notifications" element={<NotificationBox />} />
              <Route path=":id/console/*" element={<ConsoleOptions />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default ConsoleManagement;
