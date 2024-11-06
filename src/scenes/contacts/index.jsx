/* eslint-disable no-undef */
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import "./contacts.css";
import { Button, IconButton, Typography } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <div className="bg-div-of-medical-bodies" id="main-one">
        <div className="container-medical-bodiess">
          <div className="main-sangli-tilte">
            <h2>Beds Avaliablity in Medical Bodies of Sangli</h2>
          </div>

          <div className="area-in-the-sangli">
            <div className="government-section">Government Bodies:- </div>
            <div className="body-box">01</div>
            <div className="private-section">Private Bodies:- </div>
            <div className="body-box">02</div>
            <div className="total-bodies">
              Total Number of Medical Bodies :-{" "}
            </div>
            <div className="body-box">03</div>
          </div>

          <div className="medical-bodies-name">
            <table>
              <tr>
                <th>Name of Medical Body</th>
                <th>Section</th>
                <th>Type</th>
                <th>Total Vacant Bed</th>
                <th>Vacancy %</th>
                <th>Address</th>
              </tr>
              <tr>
                <td>District Hospital Ashta</td>
                <td>Government</td>
                <td>Hospital</td>
                <td>33</td>
                <td>35%</td>
                <td>Shivaji Chowk , Sangli-Kolhapur Highway , Ashta</td>
              </tr>
              <tr>
                <td>Krishna Hospital Ashta</td>
                <td>Private</td>
                <td>Hospital + Medical</td>
                <td>103</td>
                <td>65%</td>
                <td>Near ADCET College , Ashta</td>
              </tr>
              <tr>
                <td>Ashwin Hospital Ashta</td>
                <td>Private</td>
                <td>Multinational Hospital</td>
                <td>13</td>
                <td>5%</td>
                <td>Basveshwar Chowk , Bus-Stand road , Ashta</td>
              </tr>
            </table>
          </div>

          <div className="overall-data-conslusion">
            <div className="conclusion-heading">
              Conclusion of Bed Vacancy in Ashta City
            </div>
          </div>

          <div className="attach-table-information">
            <table>
              <tr>
                <th>Total Patients</th>
                <th>Total Vacant Bed</th>
                <th>Vacancy %</th>
                <th>Major Diseases</th>
                <th>Recover</th>
                <th>Death</th>
                <th>Recovery Rate</th>
                <th>Death Rate</th>
              </tr>
              <tr>
                <td>2,234</td>
                <td>208</td>
                <td>66%</td>
                <td>Dengue , Maleria , Cough , Fever</td>
                <td>679</td>
                <td>6</td>
                <td>99%</td>
                <td>1%</td>
              </tr>
            </table>
          </div>

          <div className="send-alert-message">
            <div className="scroll">
              <div className="RightToLeft">
                <p>
                  "Attention : There are Limitied bed Availability at Hospital
                  in Ashta City , Please consider seeking Medical Assistance in
                  Neghboring Cities with more Bed Capacity Your Understanding is
                  Crucial in ensuring optimal Healthcare for all , Thank You"{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
