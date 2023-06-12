import React from "react";
import "./consoleComponents.css";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from '@mui/icons-material/Download';
const ErrorLog = () => {
  return (
    <div className="body">
      <div className="newcd">
      <div className="head">
          <h4>Report Hosting</h4>
        </div>
      <div className="newcd-body">
        
        <div className="card-body console">
          <table>
            <tr>
              <td>
                <tr>
                  <button type="button" class="btn btn-light">
                    <SelectAllIcon sx={{ fontSize: 30 }} />
                  </button>
                </tr>
                <tr className="itm">
                  <h6>Select All</h6>
                </tr>
              </td>
              <td>
                <tr>
                  <button type="button" class="btn btn-light">
                    <FilterAltIcon sx={{ fontSize: 30 }} />
                  </button>
                </tr>
                <tr className="itm">
                  <h6>Filter</h6>
                </tr>
              </td>
              <td>
                <tr>
                  <button type="button" class="btn btn-light">
                    <DriveFileRenameOutlineIcon sx={{ fontSize: 30 }} />
                  </button>
                </tr>
                <tr className="itm">
                  <h6>Rename</h6>
                </tr>
              </td>
              <td>
                <tr>
                  <button type="button" class="btn btn-light">
                    <DeleteIcon sx={{ fontSize: 30 }} />
                  </button>
                </tr>
                <tr className="itm">
                  <h6>Delete</h6>
                </tr>
              </td>
              <td>
                <tr>
                  <button type="button" class="btn btn-light">
                    <DownloadIcon sx={{ fontSize: 30 }} />
                  </button>
                </tr>
                <tr className="itm">
                  <h6>Download</h6>
                </tr>
              </td>
              <td>
                <table id="search-table">
                  <div class="input-group ">
                    <button type="button" class="btn btn-light" id="search">
                      <SearchIcon sx={{ fontSize: 20 }} />
                    </button>
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                  </div>
                </table>
              </td>
            </tr>
          </table>
          <table className="data-table">
            <th>name</th>
            <th>file</th>
            <tr>
              <td class="tbl-item">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </td>
              <td class="tbl-item">6</td>
            </tr>
            <tr>
              <td class="tbl-item">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </td>
              <td class="tbl-item">6</td>
            </tr>
            <tr>
              <td class="tbl-item">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </td>
              <td class="tbl-item">6</td>
            </tr>
            <tr>
              <td class="tbl-item">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </td>
              <td class="tbl-item">6</td>
            </tr>
            <tr>
              <td class="tbl-item">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </td>
              <td class="tbl-item">6</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ErrorLog;
