import React, { Component } from "react";
import { ApiPath } from "../../API/ApiPath";
import AdminBox from "../../components/AdminBox";
import '../clientDetails/ClientDetails.css';

class AdminDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      DataisLoaded: false,
      va: window.location.pathname.split("/"),
      currentPage: 1,
      itemsPerPage: 6, 
    };
  }

  componentDidMount() {
    this.fetchData(this.state.currentPage);
  }
  fetchData(page) {
    fetch(ApiPath.API_URL + "Profile/GetAllAdmins")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          admins: json,
          DataisLoaded: true,
          currentPage: page,
        });
      });
  }

  handlePageClick = (event) => {
    this.fetchData(event.target.id);
  };

  render() {
    const { DataisLoaded, admins, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = admins.slice(indexOfFirstItem, indexOfLastItem);

    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(admins.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="App">
        <h1 style={{ color: "black", backgroundColor: "#FFFFFF" }}>
          Admin Details
        </h1>
        <div
          style={{
            height: "fit-content",
            display: "grid",
            gridGap: "20px",
            gridTemplateColumns: "auto auto auto",
            backgroundColor: "#FFFFFF",
          }}
        >
          {currentItems.map((admin) => (
            <ol key={admin.pro_id} style={{ padding: "0" }}>
              <AdminBox
                first_name={admin.pro_first_name}
                last_name={admin.pro_last_name}
                email={admin.pro_email}
                mobile_no={admin.pro_mobile}
                profile_photo={admin.PhotoLink}
                designation={admin.designation}
              />
            </ol>
          ))}
        </div>
        <div>
          <ul id="page-numbers">
            {pageNumbers.map((number) => {
              return (
                <button
                  key={number}
                  id={number}
                  onClick={this.handlePageClick}
                  className="pagenumberbutton"
                  style={{
                    color: "black",
                    cursor: "pointer",
                    marginRight: "20px",
                    border: "1px solid #1ab394",
                    borderRadius: "2px"
                  }}
                >
                  {number}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminDetails;
