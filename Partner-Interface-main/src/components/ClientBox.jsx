import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import "./ClientDetails.css";
import { NavLink, useNavigate } from "react-router-dom";
const ClientBox = ({
  client_id,
  first_name,
  last_name,
  designation,
  email,
  mobile_no,
  client_photo_link,
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
            <b className="head1">{designation}</b>
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
        <table className="Content">
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>
              {first_name} {last_name}
            </td>
          </tr>
          <tr>
            <td>Designation</td>
            <td>:</td>
            <td>{designation}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Tel.No.</td>
            <td>:</td>
            <td>{mobile_no}</td>
          </tr>
          <tr>
            <td>More Details</td>
            <td>:</td>
            <td>
              <NavLink to={"clientmoredetails"}>
                <a style={{ color: "black", textDecoration: "none" }}>
                  More Details
                </a>
              </NavLink>
            </td>
          </tr>
        </table>
      </div>
      <div className="Bottom">
        <button href="#" className="ViewButton" onClick={viewDashboard}>
          View Dashbord
        </button>
      </div>
    </div>
  );
};

export default ClientBox;
