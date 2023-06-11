import { ApiPath } from "../../../API/ApiPath";
import React, { useState, Component } from "react";
import { Api, Margin } from "@mui/icons-material";
import { textAlign } from "@mui/system";
import "./Data.css";
// import FetchCategories from "./data";
// import  ApiPath  from "../../API/ApiPath";

class ProfilePhoto extends Component{
  constructor(props){
    super(props);

    this.state = {
      photo : "",
      DataisLoaded : false,
      va : window.location.pathname.split("/"),
    };
  }

  componentDidMount() {
    fetch(ApiPath.API_URL + "Profile/UserName?id=" + this.state.va[2])
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          photo: json[0].PhotoLink,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, photo } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>...</h1>
        </div>
      );

    return (
      <div
        className="pho"
        // style={{
        //   paddingTop: "2px",
        //   fontSize: "20px",
        //   marginLeft:"50%",
        // }}
      >
        <img src={photo} className="photo" alt="profile photo"/>
      </div>
    );
  }
}
export default ProfilePhoto;