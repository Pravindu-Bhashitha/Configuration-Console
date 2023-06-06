import React from "react";
import { useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ConsoleDashboard from "../consoleDashboard/Dashboard";
import ErrorLog from "./ErrorLogFile/ErrorLog";
import Services from "./Services/Services";
import ReportHosting from "./ReportHosting/ReportHosting";
import Alert from "./Alert/Alert";

const ConsoleOptions = (props) => {
  const [theme, colorMode] = useMode();

  return (
    <div className="whole">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ height: "100%", width: "100%" }}>
          <main>
            <Routes>
              <Route path="/" element={<ConsoleDashboard />} />
              <Route path="ErrorLog" element={<ErrorLog />} />
              <Route path="Services" element={<Services />} />
              <Route path="ReportHosting" element={<ReportHosting />} />
              <Route path="Alert" element={<Alert />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default ConsoleOptions;
