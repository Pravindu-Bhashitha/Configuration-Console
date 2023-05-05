import React, { useState, Component} from "react";
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import { toast } from "react-toastify";
import { ApiPath } from "../../API/ApiPath";
class RegisterNewPartner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      dept: "",
      desigId: 3,
      dob: "",
      gender: "-1",
      mobile: "",
      joinedDate: "",
      supervisor: "",
      departments: [],
      admins: [],
      currentDateTime: "",
      count: [],
    };
  }

  componentDidMount() {
    fetch(ApiPath.API_URL + "Department/Departments")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          departments: json,
        });
      });

    fetch(ApiPath.API_URL + "Profile/AdminNames")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          admins: json,
        });
      });
  }
  render() {
    const { departments, admins } = this.state;
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        !this.state.firstName ||
        !this.state.lastName ||
        !this.state.email ||
        !this.state.password ||
        !this.state.rePassword ||
        !this.state.dept ||
        !this.state.dob ||
        this.state.gender === "-1" ||
        !this.state.mobile ||
        !this.state.joinedDate ||
        !this.state.supervisor ||
        this.state.dept === "-1" ||
        this.state.supervisor === "-1"
      ) {
        toast.error("Please fill all the fields!");
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)
      ) {
        toast.error("Invalid email address");
      } else if (this.state.password !== this.state.rePassword) {
        toast.error("Password and Re-password are not matching");
      } else if (isNaN(+this.state.mobile)) {
        toast.error("Invalid Telephone number");
      } else {
        this.state.currentDateTime = new Date().toLocaleString();
        console.log("Email = " + this.state.email);

        fetch(ApiPath.API_URL + "Profile/CountEmail?email=" + this.state.email)
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(result);
              if (result === 1) {
                fetch(ApiPath.API_URL + "Profile/AddPartner", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    pro_first_name: this.state.firstName,
                    pro_last_name: this.state.lastName,
                    pro_email: this.state.email,
                    pro_dept_id: this.state.dept,
                    pro_desig_id: this.state.desigId,
                    pro_dob: this.state.dob,
                    pro_gender: this.state.gender,
                    pro_mobile: this.state.mobile,
                    pro_joined_date: this.state.joinedDate,
                    pro_updated_time: this.state.currentDateTime,
                  }),
                })
                  .then((res2) => res2.json())
                  .then(
                    (result2) => {
                      if (result2 === -1) {
                        toast.error("Adding partner Failed.");
                      } else {
                        console.log(result2[0].pro_id);
                        fetch(ApiPath.API_URL + "Login/AddLogin", {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            username: this.state.email,
                            password: this.state.password,
                            pro_id: result2[0].pro_id,
                            desig_id: this.state.desigId,
                          }),
                        })
                          .then((res3) => res3.json())
                          .then(
                            (result3) => {
                              if (result3 === 1) {
                                fetch(
                                  ApiPath.API_URL + "Supervisor/AddSupervisor",
                                  {
                                    method: "POST",
                                    headers: {
                                      Accept: "application/json",
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                      pro_id: result2[0].pro_id,
                                      sup_id: this.state.supervisor,
                                    }),
                                  }
                                )
                                  .then((res4) => res4.json())
                                  .then((result4) => {
                                    if (result4 === 1) {
                                      toast.success("Registration Success");
                                      <NavLink to ={"access"}>

                                      </NavLink>
                                    } else {
                                      toast.error("Registration Failed");
                                    }
                                  });
                              } else {
                                toast.error("Registration Failed.");
                              }
                            },
                            (error) => {
                              toast.error(
                                "Something wrong in the response that coming from API!"
                              );
                              console.log(error);
                            }
                          );
                      }
                    },
                    (error) => {
                      toast.error(
                        "Something wrong in the response that coming from API!"
                      );
                      console.log(error);
                    }
                  );
              } else {
                toast.error("Email is used by another user.");
              }
            },
            (error) => {
              toast.error("Something wrong in API calling function!");
            }
          );
      }

      
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ ...this.state, [name]: value });
    };

    return (
      <div>
        <h1 style={{ color: "Black", textAlign: "center" }}>
          Register New Partner
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <table
              style={{
                alignContent: "center",
                margin: "0px auto",
                marginTop: "5%",
                fontSize: "24px",
              }}
            >
              <tr style={{ marginBottom: "20px", marginBottom: "200px" }}>
                <td style={{ marginRight: "20px" }}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="inputtags"
                  />
                </td>
                <td />
                <td>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="inputtags"
                  />
                </td>
              </tr>
              <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="inputtags"
                  />
                </td>
                <td />
                <td>
                  <select
                    id="gender"
                    name="gender"
                    value={this.state.gender}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "40px" }}
                    className="inputtags"
                  >
                    <option value="-1">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </td>
              </tr>
              <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="inputtags"
                  />
                </td>
                <td>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                  <input
                    type="password"
                    id="rePassword"
                    name="rePassword"
                    value={this.state.rePassword}
                    onChange={handleInputChange}
                    placeholder="Re-Password"
                    className="inputtags"
                  />
                </td>
              </tr>
              <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr>
              <tr>
                <td>
                  <select
                    id="dept"
                    name="dept"
                    value={this.state.dept}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "40px" }}
                    className="inputtags"
                  >
                    <option value="-1">Department</option>
                    {departments.map((department) => (
                      <option key={department.dep_id} value={department.dep_id}>
                        {department.dep_name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                  <select
                    id="supervisor"
                    name="supervisor"
                    value={this.state.supervisor}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "40px" }}
                    className="inputtags"
                  >
                    <option value="-1">Supervisor</option>
                    {admins.map((admin) => (
                      <option key={admin.pro_id} value={admin.pro_id}>
                        {admin.pro_first_name} {admin.pro_last_name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile No"
                    className="inputtags"
                  />
                </td>
                <td>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                  <input
                    type="text"
                    id="DoB"
                    name="dob"
                    value={this.state.dob}
                    onChange={handleInputChange}
                    placeholder="Date of Birth (yyyy-mm-dd)"
                    className="inputtags"
                  />
                </td>
              </tr>
              <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="joinedDate"
                    name="joinedDate"
                    value={this.state.joinedDate}
                    onChange={handleInputChange}
                    placeholder="Joined Date (yyyy-mm-dd)"
                    className="inputtags"
                  />
                </td>
                <td />
                <td></td>
              </tr>
              <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr>
              <tr>
                <td colSpan={3}>
                    <NavLink to ={"access"}>
                    <button
                      type="submit"
                      style={{ width: "100%" }}
                      className="registerbutton"
                    >
                      Register
                    </button>
                    </NavLink>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterNewPartner;
