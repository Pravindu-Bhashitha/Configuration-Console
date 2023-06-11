import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import "./MyProSidebar.css";
import { useSidebarContext } from "./sidebarContext";
import { json, Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import { BsFillGridFill } from "react-icons/bs";
import { Component } from "react";
import { ApiPath } from "../../../API/ApiPath";
import React from "react";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      className="box"
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

class Options extends Component {
  constructor(props) {
    super(props);

    const superAdminOptions = [
      {
        id: 1,
        title: "Super Admin Dashboard",
        to: "",
      },
      {
        id: 2,
        title: "Admins",
        to: "alladmins",
      },
      {
        id: 3,
        title: "Partners",
        to: "allpartners",
      },
      {
        id: 4,
        title: "Clients",
        to: "allclients",
      },
      {
        id: 5,
        title: "Register New Admin",
        to: "registernewadmin",
      },
      {
        id: 6,
        title: "Register New Partner",
        to: "registernewpartner",
      },
      {
        id: 7,
        title: "Register New Client",
        to: "registernewclient",
      },
      {
        id: 8,
        title: "Client Profile Management",
        to: "clientprofilemanagement",
      },
      {
        id: 9,
        title: "My Profile",
        to: "myProfile",
      },
    ];
    const adminOptions = [
      {
        id: 1,
        title: "Admin Dashboard",
        to: "",
      },
      {
        id: 2,
        title: "My Partners",
        to: "newPartner",
      },
      {
        id: 3,
        title: "My Clients",
        to: "newClient",
      },
      {
        id: 4,
        title: "My Profile",
        to: "myProfile",
      },
    ];

    const partnerOptions = [
      {
        id: 1,
        title: "Partner Dashboard",
        to: "",
      },
      {
        id: 2,
        title: "Client Details",
        to: "clientdetails",
      },
      {
        id: 3,
        title: "Project",
        to: "project",
      },
      {
        id: 4,
        title: "Assignment",
        to: "assignment",
      },
      {
        id: 5,
        title: "SMTP",
        to: "smtp",
      },
      {
        id: 6,
        title: "My Profile",
        to: "myProfile",
      },
    ];

    this.state = {
      desig_id: "",
      superAdminOptions: superAdminOptions,
      adminOptions: adminOptions,
      partnerOptions: partnerOptions,
      DataisLoaded: false,
      va: window.location.pathname.split("/"),
      selected: "Dashboard",
      setSelected: this.setState.selected,
    };
  }

  componentDidMount() {
    fetch(ApiPath.API_URL + "Profile/DesigId?id=" + this.state.va[2])
      .then((res) => res.json())
      .then((json) => {
        console.log("json = " + json[0].pro_desig_id);
        this.setState({
          desig_id: json[0].pro_desig_id,
          DataisLoaded: true,
        });
      });
    console.log("desig id = " + this.state.desig_id);
  }

  render() {
    // const [selected, setSelected] = useState("Dashboard");
    const {
      DataisLoaded,
      desig_id,
      superAdminOptions,
      partnerOptions,
      adminOptions,
      selected,
      // setSelected,
    } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> .... </h1>
        </div>
      );
    else {
      if (desig_id === 1)
        return (
          <div>
            {superAdminOptions.map((menuItem) => (
              <Item
                title={menuItem.title}
                to={menuItem.to}
                icon={<BsFillGridFill />}
                selected={selected}
                // setSelected={selected}
              />
            ))}
          </div>
        );
      else if (desig_id === 2)
        return (
          <div>
            {adminOptions.map((menuItem) => (
              <Item
                title={menuItem.title}
                to={menuItem.to}
                icon={<BsFillGridFill />}
                selected={selected}
                // setSelected={setSelected}
              />
            ))}
          </div>
        );
      else if (desig_id === 3)
        return (
          <div>
            {partnerOptions.map((menuItem) => (
              <Item
                title={menuItem.title}
                to={menuItem.to}
                icon={<BsFillGridFill />}
                selected={selected}
                // setSelected={setSelected}
              />
            ))}
          </div>
        );
    }
  }
}
export default Options;
