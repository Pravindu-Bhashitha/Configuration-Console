import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiPath } from "../../API/ApiPath";
import "./ChangePassword.css";

import { toast } from "react-toastify";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const url = window.location.pathname.split("/");
  const navigate = useNavigate();

  const handleCurrentPass = (e) => {
    setCurrentPassword(e.target.value);
  };
  const handleNewPass = (e) => {
    setNewPassword(e.target.value);
  };
  const handleReNewPass = (e) => {
    setReNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !reNewPassword) {
      toast.error("Please fill all the fields");
    } else if (newPassword !== reNewPassword) {
      toast.error("Re-new password is not matching");
    } else {
      axios
        .post(ApiPath.API_URL + "Login/CheckPassword", {
          username: "",
          password: currentPassword,
          pro_id: url[2],
        })
        .then((res) => {
          if (res.data === 1) {
            axios
              .post(ApiPath.API_URL + "Login/ChangePassword", {
                username: "",
                password: newPassword,
                pro_id: url[2],
              })
              .then((res) => {
                if (res.data === 1) {
                  setCurrentPassword("");
                  setNewPassword("");
                  setReNewPassword("");
                  toast.success("Password Changed Successfully");
                } else {
                  toast.error("Mission Failed");
                }
              })
              .catch((err) => {
                toast.error("Mission Failed");
                console.log(err);
              });
          } else {
            toast.error("Current password is not matching");
          }
        })
        .catch((err) => {
          toast.error("Mission Failed");
          console.log(err);
        });
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="WholePage" style={{height:"90vh",marginLeft:"5%",marginRight:"5%"}}>
      <article
        // className="br3 ba b--black-10 shadow-1 center"
        style={{
          Color: "silver",
          margin: "20px auto",
          width: "50%",
          padding: "20px 0",
        }}
      >
        <div>
          <div>
            <h1 className="heading">My Profile Management</h1>
          </div>
          <div className="changePasswordBox">
            <div style={{ textAlign: "center",marginTop:"10%" }}>
              <p className="changePassword">Change Password</p>
            </div>
            <div style={{marginTop:"10%" }}>
              <form onSubmit={handleSubmit}>
                <div className="row_box">
                  <input
                    type="password"
                    name="currentPassword"
                    value={currentPassword}
                    onChange={handleCurrentPass}
                    placeholder="Current Password"
                    className="inputtags"
                    title="Current Password"
                  />
                </div>
                <div className="row_box" style={{marginTop:"5%" }}>
                  <input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={handleNewPass}
                    placeholder="New Password"
                    className="inputtags"
                    title="New Password"
                  />
                </div>

                <div className="row_box" style={{marginTop:"5%" }}>
                  <input
                    type="password"
                    name="reNewPassword"
                    value={reNewPassword}
                    onChange={handleReNewPass}
                    placeholder="Re-New Password"
                    className="inputtags"
                    title="Re-New Password"
                  />
                </div>

                <div className="row_box_buttons">
                  <div className="buttons">
                    <button
                      type="button"
                      className="button_edit"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="button_save">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ChangePassword;
