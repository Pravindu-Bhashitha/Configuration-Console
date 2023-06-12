import React from "react";
import { Route, Routes, useNavigate, BrowserRouter as Router } from "react-router-dom";
import Access from "../../components/AccessTable";
import "./clientprofilemanagement.css";

const ClientProfileManagment = () => {
  // const navigate = useNavigate();

  // const handleSave = () => {
  //   navigate("access");
  // };
  return (
    <div className="WholePage" style={{marginLeft:"5%",marginRight:"5%"}}>
      <h1 style={{ color: "Black", textAlign: "center",marginTop:"5%"}}>
        Client Profile Management
      </h1>
      <div>
        <table style={{alignContent:"center", margin:"0px auto", marginTop:"5%", fontSize:"24px"}}>
          <tr style={{marginBottom:"20px",marginBottom:"200px"}}>
            <td style={{marginRight:"20px"}}>
              <input placeholder="First Name"  className="inputtags"/>
            </td>
            <td/>
            <td>
              <input placeholder="Last Name" className="inputtags"/>
            </td>
          </tr>
          {/* <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr> */}
          <tr>
            <td>
              <input placeholder="NIC" className="inputtags"/>
            </td>
            <td/>
            <td>
              <input placeholder="Designation" className="inputtags"/>
            </td>
          </tr>
          {/* <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr> */}
          <tr>
            <td>
              <input placeholder="Mobile No" className="inputtags"/>
            </td>
            <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>
              <input placeholder="Server Name" className="inputtags"/>
            </td>
          </tr>
          {/* <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr> */}
          <tr>
            <td>
              <input placeholder="Email" className="inputtags"/>
            </td>
            <td/>
            <td>
              <select placeholder="Assign to Partner" style={{width:"285px", height:"60px",color:"grey"}} className="inputtags">
                <option value="None">None</option>
                <option value="Pravindu Bhashitha">Pravindu Bhashitha</option>
                <option value="Tharindu Ruwanpathirana">
                  Tharindu Ruwanpathirana
                </option>
              </select>
            </td>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
          <tr>
            <td>
            <button className="editbutton">Edit</button>
            <button className="savebutton">Save</button>
            </td>
            <td></td>
            <button className="disablebutton">Disable</button>
          </tr>
          <tr> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr>
        </table>
        {/* <div className="buttons">
            <button className="editbutton">Edit</button>
            <button className="savebutton">Save</button>
            <button className="disablebutton">Disable</button>
        </div> */}
      </div>
    </div>
  );
};

export default ClientProfileManagment;