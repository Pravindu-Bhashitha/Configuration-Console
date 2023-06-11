import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiPath } from "../../API/ApiPath";
import "./PartnerProfile.css";
import ClientBox from "../ClientBox";
const PartnerProfile = () => {
  return (
    <div
      className="PartnerProfilewhole"
      style={{ marginLeft: "5%", marginRight: "5%" }}
    >
      <h1
        style={{
          color: "Black",
          textAlign: "center",
          marginTop: "3%",
          fontSize: "40px",
        }}
      >
        Partner Profile
      </h1>
      <table
        style={{
          alignContent: "center",
          margin: "0px auto",
          marginTop: "5%",
          fontSize: "24px",
        }}
      >
        <tr>
          <td>
            <input
              placeholder="First Name"
              className="PartnerProfileInputs"
            ></input>
          </td>
          <td></td>
          <td>
            <input
              placeholder="Last Name"
              className="PartnerProfileInputs"
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <input placeholder="Email" className="PartnerProfileInputs"></input>
          </td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
            <input
              placeholder="Department"
              className="PartnerProfileInputs"
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <input
              placeholder="Designation"
              className="PartnerProfileInputs"
            ></input>
          </td>
          <td></td>
          <td>
            <input
              placeholder="Birthday"
              className="PartnerProfileInputs"
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <select
              placeholder="Gender"
              style={{ width: "100%", color: "grey" }}
              className="PartnerProfileInputs"
            >
              <option>Male</option>Female<option></option>
            </select>
          </td>
          <td></td>
          <td>
            <input
              placeholder="Phone Number"
              className="PartnerProfileInputs"
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <input
              placeholder="Joined Date"
              className="PartnerProfileInputs"
            ></input>
          </td>
          <td></td>
          <td>
            <input
              placeholder="Updated Time"
              className="PartnerProfileInputs"
            ></input>
          </td>
        </tr>
      </table>
      <h1
        style={{
          color: "Black",
          textAlign: "center",
          marginTop: "3%",
          fontSize: "40px",
        }}
      >
        Clients Assigned
      </h1>
      <div style={{marginBottom:"2%"}}>
        <ClientBox />
      </div>
    </div>
  );
};

export default PartnerProfile;
