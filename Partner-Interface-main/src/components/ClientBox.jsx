import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import "./ClientDetails.css";
import logo from "../Images/logo192.png";
//import profilephoto from "../Images/65342 png.png";
import { NavLink , useNavigate} from "react-router-dom";
const ClientBox = ({
  client_id,
  first_name,
  last_name,
  designation,
  email,
  mobile_no,
  client_photo_link
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const viewDashboard = () => {
    navigate(client_id + "/console");
  };

  return (
    <div className="Box">
      <div className="Upper">
        <p className="Heads">
          <div className="Head">
            <b className="head1">General Manager</b>
            <br />
            <b className="head2">hSenid Business</b>
          </div>
          <div className="Notify">
          <NavLink to={"notifications"}>
              <button className="notification">
                <span>Notifications</span>
                <span class="badge">2</span>
              </button>
            </NavLink>
          </div>
        </p>
      </div>
      <div className="Middle">
        <div>
          <img
            className="IMG"
            src={client_photo_link}
            alt="Photo"
            width="50px"
            height="50px"
          ></img>
          <b className="Client">Client Profile Details</b>
        </div>
        <br />
        <div className="Content">
          Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {first_name} {last_name}
          <br />
          Designation <span></span> : {designation}
          <br />
          Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {email}
          <br />
          Tel.No. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {mobile_no}
          <br />
          More details : <NavLink to={"clientmoredetails"}>
              <a style={{color:"black",textDecoration:"none"}}>
                More Details
              </a>
            </NavLink>
        </div>
      </div>
      <div className="Bottom">
        <button href="#" className="ViewButton" onClick={viewDashboard}>View Dashbord</button>
      </div>
    </div>
  );
};

export default ClientBox;
