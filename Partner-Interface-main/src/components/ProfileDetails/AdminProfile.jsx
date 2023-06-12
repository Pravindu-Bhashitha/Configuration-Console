import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiPath } from "../../API/ApiPath";
import "./AdminProfile.css";
import PartnerBox from "../PartnerBox";
const AdminProfile = () => {
  const [urlId, setUrlId] = useState(window.location.pathname.split("/"));
  const [data, setData] = useState({
    pro_id: 0,
    pro_first_name: "",
    pro_last_name: "",
    pro_email: "",
    pro_dept_id: 0,
    pro_desig_id: 0,
    pro_dob: "",
    pro_gender: "",
    pro_mobile: "",
    pro_joined_date: "",
    pro_updated_time: "",
  });
  const [depart, setDepart] = useState("");
  const [desig, setDesig] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(ApiPath.API_URL + "Profile/PartnerProfile?id=" + urlId[2])
      .then((res) => res.json())
      .then((json) => {
        setData(json[0]);
        fetch(ApiPath.API_URL + "Department/DeptName?id=" + json[0].pro_dept_id)
          .then((res) => res.json())
          .then((json2) => {
            if (json[0].pro_desig_id === 1) {
              setDepart("No Department");
            } else {
              setDepart(json2[0].dep_name);
            }
            fetch(
              ApiPath.API_URL +
                "Designation/DesigName?id=" +
                json[0].pro_desig_id
            )
              .then((res) => res.json())
              .then((json3) => {
                setDesig(json3[0].desig_name);
              });
          });
      });
  };
    return ( 
        <div
      className="AdminProfilewhole"
      style={{marginLeft: "5%", marginRight: "5%" }}
    >
      <h1 style={{ color: "Black", textAlign: "center", marginTop: "3%",fontSize:"40px" }}>
        Admin Profile
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
            <input placeholder="First Name" className="AdminProfileInputs"></input>
          </td>
          <td></td>
          <td>
            <input placeholder="Last Name" className="AdminProfileInputs"></input>
          </td>
        </tr>
        <tr>
          <td>
            <input placeholder="Email" className="AdminProfileInputs"></input>
          </td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
            <input placeholder="Department" className="AdminProfileInputs"></input>
          </td>
        </tr>
        <tr>
          <td>
            <input placeholder="Designation" className="AdminProfileInputs"></input>
          </td>
          <td></td>
          <td>
            <input placeholder="Birthday" className="PartnerProfileInputs"></input>
          </td>
        </tr>
        <tr>
          <td>
            <select placeholder="Gender" style={{ width: "100%", color:"grey" }} className="AdminProfileInputs">
              <option>Male</option>Female<option></option>
            </select>
          </td>
          <td></td>
          <td>
            <input placeholder="Phone Number" className="AdminProfileInputs"></input>
          </td>
        </tr>
        <tr>
          <td>
            <input placeholder="Joined Date" className="AdminProfileInputs"></input>
          </td>
          <td></td>
          <td>
            <input placeholder="Updated Time" className="AdminProfileInputs"></input>
          </td>
        </tr>
      </table>
      <div style={{marginBottom:"2%"}}>
        <PartnerBox/>
      </div>
    </div>
    );
}
 
export default AdminProfile;