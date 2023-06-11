import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiPath } from "../../API/ApiPath";
import "./ClientProfile.css";
// import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import { toast } from "react-toastify";
// import "tachyons";
// import './custom-confirm-alert.css';

const ClientProfile = () => {

  const navigate = useNavigate();
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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    // <div
    //   className="WholePage"
    //   style={{ height: "90vh", marginLeft: "5%", marginRight: "5%" }}
    // >
    //   <h1 style={{ color: "Black", textAlign: "center", marginTop: "3%" }}>
    //     My Profile Management
    //   </h1>
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       <table
    //         style={{
    //           alignContent: "center",
    //           margin: "0px auto",
    //           marginTop: "5%",
    //           fontSize: "24px",
    //         }}
    //       >
    //         <tr style={{ marginBottom: "20px", marginBottom: "200px" }}>
    //           <td style={{ marginRight: "20px" }}>
    //             <input
    //               type="text"
    //               name="pro_first_name"
    //               value={data.pro_first_name}
    //               onChange={handleInputChange}
    //               placeholder="First Name"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="First Name"
    //             />
    //           </td>
    //           <td>
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_last_name"
    //               value={data.pro_last_name}
    //               onChange={handleInputChange}
    //               placeholder="Last Name"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="Last Name"
    //             />
    //           </td>
    //         </tr>
    //         {/* <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr> */}
    //         <tr>
    //           <td>
    //             <input
    //               type="email"
    //               name="pro_email"
    //               value={data.pro_email}
    //               onChange={handleInputChange}
    //               placeholder="Email"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="Email"
    //             />
    //           </td>
    //           <td>
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               name="depart"
    //               defaultValue={depart}
    //               placeholder="Department"
    //               className="inputtags"
    //               disabled
    //               title="Department"
    //             />
    //           </td>
    //         </tr>
    //         {/* <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr> */}
    //         <tr>
    //           <td>
    //             <input
    //               type="text"
    //               name="desig"
    //               defaultValue={desig}
    //               placeholder="Designation"
    //               className="inputtags"
    //               disabled
    //               title="Designation"
    //             />
    //           </td>
    //           <td>
    //             {" "}
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_dob"
    //               value={data.pro_dob.substring(0, 10)}
    //               onChange={handleInputChange}
    //               placeholder="Date of Birth (yyyy-mm-dd)"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="Date of Birth"
    //               maxLength="10"
    //             />
    //           </td>
    //         </tr>
    //         {/* <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr> */}
    //         <tr>
    //           <td>
    //             <select
    //               id="gender"
    //               name="pro_gender"
    //               value={data.pro_gender}
    //               onChange={handleInputChange}
    //               className="input_select"
    //               disabled={isDisabled}
    //               title="Gender"
    //               // style={{width:"100%",height:"20px",fontSize:"10px"}}
    //             >
    //               <option value="Male">Male</option>
    //               <option value="Female">Female</option>
    //             </select>
    //           </td>
    //           <td></td>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_mobile"
    //               value={data.pro_mobile}
    //               onChange={handleInputChange}
    //               placeholder="Mobile No"
    //               className="inputtags"
    //               disabled={isDisabled}
    //               title="Mobile No"
    //             />
    //           </td>
    //         </tr>
    //         {/* <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr> */}
    //         <tr>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_joined_date"
    //               defaultValue={data.pro_joined_date.substring(0, 10)}
    //               placeholder="Joined Date"
    //               className="inputtags"
    //               disabled
    //               title="Joined Date"
    //             />
    //           </td>
    //           <td></td>
    //           <td>
    //             <input
    //               type="text"
    //               name="pro_updated_time"
    //               value={
    //                 data.pro_updated_time.substring(0, 10) +
    //                 " " +
    //                 data.pro_updated_time.substring(11, 19)
    //               }
    //               placeholder="Updated Time"
    //               className="inputtags"
    //               disabled
    //               title="Last Updated Time"
    //             />
    //           </td>
    //         </tr>
    //         <tr>
    //           {" "}
    //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         </tr>
    //         <tr>
    //           <td>
    //             <button
    //               type="button"
    //               className="button_edit"
    //               onClick={enbleEditing}
    //             >
    //               Edit
    //             </button>
    //             <button
    //               type="submit"
    //               className="button_save"
    //               disabled={isDisabled}
    //             >
    //               Save
    //             </button>
    //           </td>
    //           <td></td>
    //           <td>
    //             <button
    //               type="button"
    //               className="buttonpassword"
    //               onClick={() => navigate("changePassword")}
    //             >
    //               Change Password
    //             </button>
    //           </td>
    //         </tr>
    //       </table>
    //     </form>
    //   </div>
    // </div>
    
    <div
      className="ClientProfilewhole"
      style={{ height: "90vh", marginLeft: "5%", marginRight: "5%" }}
    >
      <h1 style={{ color: "Black", textAlign: "center", marginTop: "3%",fontSize:"40px" }}>
        ClientProfile
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
            <input placeholder="First Name" className="ClientProfileInputs"></input>
          </td>
          <td></td>
          <td>
            <input placeholder="Last Name" className="ClientProfileInputs"></input>
          </td>
        </tr>
        <tr>
          <td>
            <input placeholder="Email" className="ClientProfileInputs"></input>
          </td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
            <input placeholder="Department" className="ClientProfileInputs"></input>
          </td>
        </tr>
        <tr>
          <td>
            <input placeholder="Designation" className="ClientProfileInputs"></input>
          </td>
          <td></td>
          <td>
            <input placeholder="Birthday" className="ClientProfileInputs"></input>
          </td>
        </tr>
        <tr>
          <td>
            <select placeholder="Gender" style={{ width: "100%", color:"grey" }} className="ClientProfileInputs">
              <option>Male</option>Female<option></option>
            </select>
          </td>
          <td></td>
          <td>
            <input placeholder="Phone Number" className="ClientProfileInputs"></input>
          </td>
        </tr>
        <tr>
          <td>
            <input placeholder="Joined Date" className="ClientProfileInputs"></input>
          </td>
          <td></td>
          <td>
            <input placeholder="Updated Time" className="ClientProfileInputs"></input>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ClientProfile;
