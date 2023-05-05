import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTheme, Box, IconButton } from "@mui/material";
import { LogoutRounded } from "@mui/icons-material";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import { useProSidebar } from "react-pro-sidebar";
import "./Topbar.css";
import { BsSearch } from "react-icons/bs";
const Topbar = () => {
  // const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const navigate = useNavigate();
  // const { toggleSidebar, broken, rtl } = useProSidebar();

  const handleSearch = () => {
    const results = window.find(searchTerm);
    if (results) {
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2} className="topbar">
      <Box display="flex">
        <input
          className="inputbase"
          type="text"
          placeholder="Search for something..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={handleSearch} className="searchbutton1" ><BsSearch className="searchbutton"></BsSearch></button>
        {searchResults.length > 0 && (
          <div className="search-results">
            <ul style={{backgroundColor:"yelow"}}>
              {searchResults.map((result, index) => (
                <li key={index}>{result} style={{Color:"yelow"}}</li>
              ))}
            </ul>
          </div>
        )}
      </Box>
      <Link to="/">
        <button className="toprightbutton">
          <Box display="flex" className="topright">
            <LogoutRounded className="logout" />
            Log out
          </Box>
        </button>
      </Link>
    </Box>
  );
};

export default Topbar;
