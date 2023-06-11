import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import "./MyProSidebar.css";
import { useSidebarContext } from "./sidebarContext";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme, Box, Typography } from "@mui/material";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
// import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import NameUser from "./Data";
import Options from "./Options";
import { FaBars } from "react-icons/fa";
import profilephoto from '../../../Images/65342 png.png';
import ProfilePhoto from "./ProfilePhoto";

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  const [showMessage, setShowMessage] = useState(false);
  const message = "Logout";
  function handleMouseEnter() {
    setShowMessage(true);
  }

  function handleMouseLeave() {
    setShowMessage(false);
  }

  return (
    <Box 
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        color:"#fff",
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor:focus": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        // rtl={sidebarRTL}
        backgroundColor="#2F4050"
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem 
            icon={
              collapsed && (
                <FaBars onClick={() => collapseSidebar()} style={{fontSize:"20px"}} />
              // ) : sidebarRTL ? (
              //   <SwitchLeftOutlinedIcon
              //     onClick={() => setSidebarRTL(!sidebarRTL)}
              //   />
              // ) : (
              //   <SwitchRightOutlinedIcon
              //     onClick={() => setSidebarRTL(!sidebarRTL)}
              //   />
              // )
              )
            }
            style={{
              margin: "10px 0 20px 0",
              // color: colors.grey[100],
            }}
            
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="5px"
              >
                <b className="username">
                  <NameUser/>
                </b>
                <button
                  style={{
                    backgroundColor: "#1ab394",
                    border: "1px solid transparent",
                    color: "#fff",
                    borderRadius: "2px",
                    fontSize: "14px",
                    height:"120%"
                  }}
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <FaBars
                    style={{
                      verticalAlign: "middile",
                      paddingBottom: "5px",
                      fontSize: "20px",
                      marginTop:"10%"
                    }}
                  />
                </button>
              </Box>
            )}
          </MenuItem>
          <MenuItem >
          {!collapsed && (
              <Box
              alignItems="center"
              ml="5px"
              width="100%"
              textAlign="left"
            >
            <ProfilePhoto/>
            </Box>
            )}
            </MenuItem>
          {!collapsed && (
            <Box >
              <Box
              
                style={{ cursor: "pointer" }}
                marginLeft="70px"
                marginTop="50px"
                paddingBottom="10px"
              >
                <b
                  className="menu"
                  style={{ color: "grey", verticalAlign: "middle",fontSize:"14px",marginTop:"px"}}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Menu
                  <Link to="/" style={{color:"#1ab394",textDecoration:"none",fontWeight:"500",width:"110%"}} > {showMessage && message} </Link>
                </b>
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : "0%"} fontSize={12} >
            <Options />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
