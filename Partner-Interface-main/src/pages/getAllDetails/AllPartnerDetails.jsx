import React, { Component } from "react";
import { ApiPath } from "../../API/ApiPath";
import PartnerBox from "../../components/PartnerBox";
import '../clientDetails/ClientDetails.css';
class AllPartnerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [],
      DataisLoaded: false,
      va: window.location.pathname.split("/"),
      currentPage: 1,
      itemsPerPage: 6, // number of items to be displayed per page
    };
  }

  componentDidMount() {
    this.fetchData(this.state.currentPage);
  }
  // + "&page=" + page
  fetchData(page) {
    fetch(ApiPath.API_URL + "Profile/GetAllPartners")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          partners: json,
          DataisLoaded: true,
          currentPage: page,
        });
      });
  }

  handlePageClick = (event) => {
    this.fetchData(event.target.id);
  };

  render() {
    const { DataisLoaded, partners, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = partners.slice(indexOfFirstItem, indexOfLastItem);

    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(partners.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="App">
        <h1 style={{ color: "black", backgroundColor: "#FFFFFF" }}>
          All Partners Details
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
          {currentItems.map((partner) => (
            <ol key={partner.pro_id} style={{ padding: "0" }}>
              <PartnerBox
                first_name={partner.pro_first_name}
                last_name={partner.pro_last_name}
                email={partner.pro_email}
                mobile_no={partner.pro_mobile}
                photo_link = {partner.PhotoLink}
                designation={partner.designation}
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
                  // className={currentPage === number ? "active" : null}
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

export default AllPartnerDetails;
