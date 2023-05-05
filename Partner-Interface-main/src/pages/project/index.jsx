import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import "./index.css";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiFillFolder } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";

const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <Box m="20px">
      <Box>
        <h1 className="header">PROJECT</h1>
      </Box>
      <Box
        m="8px 0 0 0"
        width="100%"
        height="74vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <div className="all">
          <div className="firstpart">
            <p className="topcontain">All projects assigned to this account</p>
            <button className="topbutton">Create new project</button>
          </div>
          <div className="secondpart">
            <button className="refresh" onClick={handleRefresh}>
              <HiOutlineRefresh />
              Refresh
            </button>
            <input type="text" placeholder="Search" className="search"></input>
            <button className="go">Go!</button>
          </div>
          <div>
            <div className="thirdpart">
              <label className="activestatusbutton">Active</label>
              <div className="secondcol">
                Contract with Zender Company
                <br />
                <small>Created 14.08.2014</small>
              </div>
              <div className="thirdcol">
                <div className="both">
                  <small>Completion With:48%</small>
                  <br />
                  <progress value="48" max="100" className="progressbar">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="fourthcol">
                <div className="viewdiv">
                  <button className="view">
                    <AiFillFolder />
                    View
                  </button>
                </div>
                <div className="editview">
                  <button className="edit">
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="thirdpart">
              <label className="activestatusbutton">Active</label>
              <div className="secondcol">
                Contract with Zender Company
                <br />
                <small>Created 14.08.2014</small>
              </div>
              <div className="thirdcol">
                <div className="both">
                  <small>Completion With:48%</small>
                  <br />
                  <progress value="48" max="100" className="progressbar">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="fourthcol">
                <div className="viewdiv">
                  <button className="view">
                    <AiFillFolder />
                    View
                  </button>
                </div>
                <div className="editview">
                  <button className="edit">
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="thirdpart">
              <label className="activestatusbutton">Active</label>
              <div className="secondcol">
                Contract with Zender Company
                <br />
                <small>Created 14.08.2014</small>
              </div>
              <div className="thirdcol">
                <div className="both">
                  <small>Completion With:48%</small>
                  <br />
                  <progress value="48" max="100" className="progressbar">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="fourthcol">
                <div className="viewdiv">
                  <button className="view">
                    <AiFillFolder />
                    View
                  </button>
                </div>
                <div className="editview">
                  <button className="edit">
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="thirdpart">
              <label className="activestatusbutton">Active</label>
              <div className="secondcol">
                Contract with Zender Company
                <br />
                <small>Created 14.08.2014</small>
              </div>
              <div className="thirdcol">
                <div className="both">
                  <small>Completion With:48%</small>
                  <br />
                  <progress value="48" max="100" className="progressbar">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="fourthcol">
                <div className="viewdiv">
                  <button className="view">
                    <AiFillFolder />
                    View
                  </button>
                </div>
                <div className="editview">
                  <button className="edit">
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="thirdpart">
              <label className="activestatusbutton">Active</label>
              <div className="secondcol">
                Contract with Zender Company
                <br />
                <small>Created 14.08.2014</small>
              </div>
              <div className="thirdcol">
                <div className="both">
                  <small>Completion With:48%</small>
                  <br />
                  <progress value="48" max="100" className="progressbar">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="fourthcol">
                <div className="viewdiv">
                  <button className="view">
                    <AiFillFolder />
                    View
                  </button>
                </div>
                <div className="editview">
                  <button className="edit">
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="thirdpart">
              <label className="activestatusbutton">Active</label>
              <div className="secondcol">
                Contract with Zender Company
                <br />
                <small>Created 14.08.2014</small>
              </div>
              <div className="thirdcol">
                <div className="both">
                  <small>Completion With:48%</small>
                  <br />
                  <progress value="48" max="100" className="progressbar">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="fourthcol">
                <div className="viewdiv">
                  <button className="view">
                    <AiFillFolder />
                    View
                  </button>
                </div>
                <div className="editview">
                  <button className="edit">
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Projects;
