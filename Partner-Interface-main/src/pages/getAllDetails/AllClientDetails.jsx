import React, { Component } from "react";
import { ApiPath } from "../../API/ApiPath";
import ClientBox from "../../components/ClientBox";
import '../clientDetails/ClientDetails.css';
class AllClientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
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
    fetch(ApiPath.API_URL + "ClientDetail/GetAllClients")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          clients: json,
          DataisLoaded: true,
          currentPage: page,
        });
      });
  }

  handlePageClick = (event) => {
    this.fetchData(event.target.id);
  };

  render() {
    const { DataisLoaded, clients, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = clients.slice(indexOfFirstItem, indexOfLastItem);

    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(clients.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="App">
        <h1 style={{ color: "black", backgroundColor: "#FFFFFF" }}>
          All Clients Details
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
          {currentItems.map((client) => (
            <ol key={client.client_id} style={{ padding: "0" }}>
              <ClientBox
                first_name={client.first_name}
                last_name={client.last_name}
                designation={client.designation}
                email={client.email}
                mobile_no={client.mobile_no}
                client_photo_link = {client.client_photo_link}
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

export default AllClientDetails;
