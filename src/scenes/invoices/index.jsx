import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import {  GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import { Button, IconButton } from "@mui/material";
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
import "./invoices.css";
const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    
    <>
      <div class="ai-outbreak-pre">
        <div class="medical-shortage-predication">
          <div class="medical-shortage-heading">
            AI for Predicating the Shortage of Medical Equipments
          </div>

          <div class="medical-predication-table-with-hospital-name">
            <div class="seperating-line upper-line"></div>

            <div class="cityName">
              Medical Shortage <div className="location-of-city"> Sangli </div>
            </div>

            <div class="seperating-line upper-line"></div>

            <div class="medical-body-name-heading">
              District Hospital Ashta , District Sangli 416416
            </div>

            <div className="all-the-tables">
              <table>
                <tr id="row1">
                  <th>Medical_Supplies</th>
                  <th>Medical_Equipments</th>
                  <th>Staffing_Levels</th>
                  <th>PPE</th>
                  <th>Oxygen_Supply</th>
                  <th>Blood</th>
                  <th>Pharmaceuticals</th>
                </tr>
                <tr id="row2">
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                </tr>

                <button class="send-data-btn" id="first-send">
                  Send Data
                </button>
              </table>
            </div>

            <div class="seperating-line"></div>

            <div class="medical-body-name-heading">
              Krishna Hospital Ashta , District Sangli 416416
            </div>

            <div className="all-the-tables">
              <table>
                <tr>
                  <th>Medical Supplies</th>
                  <th>Medical Equipments</th>
                  <th>Staffing Levels</th>
                  <th>PPE</th>
                  <th>Oxygen Supply</th>
                  <th>Blood</th>
                  <th>Pharmaceuticals</th>
                </tr>
                <tr>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                </tr>

                <button class="send-data-btn">Send Data</button>
              </table>
            </div>

            <div class="seperating-line"></div>

            <div class="medical-body-name-heading">
              Ashwin Hospital Ashta , Distrct Sangli 416416
            </div>

            <div className="all-the-tables">
              <table>
                <tr>
                  <th>Medical Supplies</th>
                  <th>Medical Equipments</th>
                  <th>Staffing Levels</th>
                  <th>PPE</th>
                  <th>Oxygen Supply</th>
                  <th>Blood</th>
                  <th>Pharmaceuticals</th>
                </tr>
                <tr>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                </tr>

                <button class="send-data-btn">Send Data</button>
              </table>
            </div>

            <div class="medical-body-name-heading">
              Kadam Hospital Ashta , District-Sangli 416416
            </div>

            <div className="all-the-tables">
              <table>
                <tr>
                  <th>Medical Supplies</th>
                  <th>Medical Equipments</th>
                  <th>Staffing Levels</th>
                  <th>PPE</th>
                  <th>Oxygen Supply</th>
                  <th>Blood</th>
                  <th>Pharmaceuticals</th>
                </tr>
                <tr>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="stock-full">Stock Full</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                  <td>
                    <div class="shortage">Shortage Predicted</div>
                  </td>
                </tr>

                <button class="send-data-btn">Send Data</button>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoices;
