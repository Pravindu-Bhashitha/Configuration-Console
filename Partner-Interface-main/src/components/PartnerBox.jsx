import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import "./ClientDetails.css";
import { NavLink } from "react-router-dom";
const PartnerBox = ({
  first_name,
  last_name,
  email,
  mobile_no,
  photo_link,
  designation,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
            src={photo_link}
            alt="Photo"
            width="50px"
            height="50px"
          ></img>
          <b className="Client">Partner Profile Details</b>
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
              <NavLink to={"partnermoredetails"}>
                <a style={{ color: "black", textDecoration: "none" }}>
                  More Details
                </a>
              </NavLink>
            </td>
          </tr>
        </table>
      </div>
      <div className="Bottom">
        <NavLink to={"partnerdashboard"}>
          <button href="#" className="ViewButton">
            View Dashbord
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PartnerBox;
