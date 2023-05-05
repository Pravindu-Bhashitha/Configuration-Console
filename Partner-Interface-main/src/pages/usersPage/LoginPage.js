import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiPath } from "../../API/ApiPath";
import "./LoginPage.css";
const initialState = {
  username: "",
  password: "",
};

const LoginPage = (props) => {
  const [state, setState] = useState(initialState);
  const { username, password } = state;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username = " + username);
    console.log("Password = " + password);

    if (!username || !password) {
      toast.error("Please fill all the fields!");
    } else {
      fetch(ApiPath.API_URL + "Login/Login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if (result !== -1) {
              console.log(result[0].pro_id);
              console.log(result[0].desig_id);
              if (result[0].desig_id === 1) {
                props.onLogin();
                navigate("/superadmin/" + result[0].pro_id);
              } else if (result[0].desig_id === 2) {
                props.onLogin();
                navigate("/admin/" + result[0].pro_id);
              } else if (result[0].desig_id === 3) {
                // Protected Routes (2023/02/04)
                props.onLogin();
                navigate("/partner/" + result[0].pro_id);
              }
            } else {
              console.log(result);
              toast.error("Login Failed!");
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
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div
      className="container text-center align-items-center justify-content-center padding-auto"
      // className="whole"
      style={{ width: "750px", marginTop: "150px" }}
    >
      <h1 style={{ padding: "auto" }}>Welcome to Client Service Module</h1>
      <div className="row mb-3">
        <div className="col" style={{ textAlign: "justify", fontSize: "14x" }}>
          {/* <h2>Welcome to Client Service Module</h2> */}

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>

        <div className="col pt-3">
          <div>
            <form
              className="RightForm"
              style={{
                margin: "0",
                padding: "0",
                alignContent: "center",
              }}
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                id="username"
                name="username"
                placeholder="Email"
                value={username}
                onChange={handleInputChange}
                style={{
                  width: "80%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  display: "inline-block",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
                className="email"
              />

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                style={{
                  width: "80%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  display: "inline-block",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
                className="password"
              />

              <input
                className="btn-primary"
                type="submit"
                value="Login"
                style={{
                  width: "80%",
                  //backgroundColor: "#1ab394",
                  color: "rgb(255, 255, 255)",
                  padding: "14px 20px",
                  margin: "8px 0",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              />
            </form>
          </div>

          <div>
            <a href="./help" className="help">
              Forgot Password
            </a>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-between border-top border-dark">
        <p className="w-auto">Copyright hSenid Business Solutions. </p>
        <p className="w-auto">© 2022</p>
      </div>
    </div>
  );
};

export default LoginPage;
