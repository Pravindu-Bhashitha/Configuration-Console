import React, { useState, Component } from "react";
import { toast } from "react-toastify";
import { ApiPath } from "../../API/ApiPath";
import './registerNewAdmin.css';
class RegisterNewAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      dept: "",
      desigId: 2,
      dob: "",
      gender: "-1",
      mobile: "",
      joinedDate: "",
      supervisor: 1,
      departments: [],
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
  }

  render() {
    const { departments } = this.state;

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
        this.state.dept === "-1"
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
      <div className="WholePage" style={{height:"90vh",marginLeft:"5%",marginRight:"5%"}}>
        <h1 style={{ color: "Black", textAlign: "center",marginTop:"5%"}}>
          Register New Admin
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <table
              style={{
                alignContent: "center",
                margin: "0px auto",
                marginTop: "5%",
                fontSize: "24px",
                marginBottom:"10%",
                marginTop: "5%"
              }}
            >
              <tr style={{ marginBottom: "20px", marginBottom: "200px" }}>
                <td style={{ marginRight: "20px"}}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="inputs"
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
                    className="inputs"
                  />
                </td>
              </tr>
              {/* <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr> */}
              <tr>
                <td>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="inputs"
                  />
                </td>
                <td />
                <td>
                  <select
                    id="gender"
                    name="gender"
                    value={this.state.gender}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "50px",color:"grey" }}
                    className="inputs"
                  >
                    <option value="-1">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </td>
              </tr>
              {/* <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr> */}
              <tr>
                <td>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="inputs"
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
                    className="inputs"
                  />
                </td>
              </tr>
              {/* <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr> */}
              <tr>
                <td>
                  <select
                    id="dept"
                    name="dept"
                    value={this.state.dept}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "40px",color:"grey" }}
                    className="inputs"
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
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile No"
                    className="inputs"
                  />
                </td>
              </tr>
              {/* <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr> */}
              <tr>
                <td>
                  <input
                    type="text"                  
                    id="DoB"
                    name="dob"
                    value={this.state.dob}
                    onChange={handleInputChange}
                    placeholder="Date Of Birth (yyyy-mm-dd)"
                    className="inputs"
                  />
                  {/* <label style={{ color: "grey" }}>Date Of Birth</label>
                  <input
                    type="date"
                    placeholder="hkjfdfdgh"
                    className="inputtags"
                  ></input> */}
                </td>
                <td>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                  <input
                    type="text"
                    id="joinedDate"
                    name="joinedDate"
                    value={this.state.joinedDate}
                    onChange={handleInputChange}
                    placeholder="Joined Date (yyyy-mm-dd)"
                    className="inputs"
                  />
                  {/* <label style={{ color: "grey" }}>Date Of Birth</label>
                  <input
                    type="date"
                    placeholder="hkjfdfdgh"
                    className="inputtags"
                  ></input> */}
                </td>
              </tr>

              <tr>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr>
              <tr>
                <td colSpan={3}>
                  <button
                    type="submit"
                    style={{ width: "100%" }}
                    className="registerbutton"
                  >
                    Register
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterNewAdmin;
