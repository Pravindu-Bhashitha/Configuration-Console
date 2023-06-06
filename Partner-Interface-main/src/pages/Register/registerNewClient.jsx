import React, { useState, Component } from "react";
import { toast } from "react-toastify";
import { ApiPath } from "../../API/ApiPath";

import "./registerNewClient.css";

class RegisterNewClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      nic: "",
      mobile: "",
      email: "",
      designation: "",
      server_name: "",
      partnerId: "",
      partners: [],
      count: [],
    };
  }

  componentDidMount() {
    fetch(ApiPath.API_URL + "Profile/PartnerNames")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          partners: json,
        });
      });
  }

  render() {
    const { partners } = this.state;

    const handleSubmit = (e) => {
      e.preventDefault();

      if (
        !this.state.firstName ||
        !this.state.lastName ||
        !this.state.nic ||
        !this.state.mobile ||
        !this.state.email ||
        !this.state.designation ||
        !this.state.server_name ||
        this.state.partnerId === "-1"
      ) {
        toast.error("Please fill all the fields!");
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)
      ) {
        toast.error("Invalid email address");
      } else if (isNaN(+this.state.mobile)) {
        toast.error("Invalid Telephone number");
      } else {
        console.log("Email = " + this.state.email);

        fetch(
          ApiPath.API_URL + "ClientDetail/CheckEmail?email=" + this.state.email
        )
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(result);
              if (result === 1) {
                fetch(ApiPath.API_URL + "ClientDetail/AddClient", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    nic: this.state.nic,
                    mobile_no: this.state.mobile,
                    email: this.state.email,
                    designation: this.state.designation,
                    server_name: this.state.server_name,
                    partner_id: this.state.partnerId,
                  }),
                })
                  .then((res2) => res2.json())
                  .then(
                    (result2) => {
                      if (result2 === -1) {
                        toast.error("Adding Client Failed.");
                      } else {
                        toast.success("Client Registration Success.");
                        // this.state.firstName = "";
                        // // this.state.lastName = "";
                        // // this.state.nic = "";
                        // // this.state.mobile = "";
                        // // this.state.email = "";
                        // // this.state.designation = "";
                        // // this.state.server_name = "";
                        // // this.state.partnerId = -1;
                        // handleInputChange(this.state.firstName);
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
                toast.error("Email is used by another client.");
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
          Register New Client
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
                    id="nic"
                    name="nic"
                    value={this.state.nic}
                    onChange={handleInputChange}
                    placeholder="NIC"
                    className="inputtags"
                  />
                </td>
                <td />
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
                <td>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={this.state.designation}
                    onChange={handleInputChange}
                    placeholder="Designation"
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
                    id="partnerId"
                    name="partnerId"
                    value={this.state.partnerId}
                    onChange={handleInputChange}
                    style={{ width: "100%", height: "40px" }}
                    className="inputtags"
                  >
                    <option value="-1">Partner</option>
                    {partners.map((partner) => (
                      <option key={partner.pro_id} value={partner.pro_id}>
                        {partner.pro_first_name} {partner.pro_last_name}
                      </option>
                    ))}
                  </select>
                </td>
                <td />
                <td>
                  <input
                    type="text"
                    id="server_name"
                    name="server_name"
                    value={this.state.server_name}
                    onChange={handleInputChange}
                    placeholder="Server Name"
                    className="inputtags"
                  />
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

export default RegisterNewClient;
