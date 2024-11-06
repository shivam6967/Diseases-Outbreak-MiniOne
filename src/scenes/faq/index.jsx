import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import "./faq.css"
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (

    <>
      <div class="view-risk-zone-main-container">
        <div class="heaing-section-risk-zone">
          AI OutBreak Predication and Displaying RiskZone
        </div>

        <div class="map-and-the-guied-section">
          <div class="map-section">
            <div id="map">
              <h2>Your Google Map API has been Expired</h2>
              <a href="http://127.0.0.1:5500/Pages/RiskZone.html">Go Visit</a>
            </div>
          </div>

          <div class="guied-section">
            <div class="guied-section-childs-part">
              <div class="guied-box" id="red"></div>
              <div class="text-guide">Red :- Malaria</div>
            </div>
            <div class="guied-section-childs-part">
              <div class="guied-box" id="orange"></div>
              <div class="text-guide">Orange :- Dengue</div>
            </div>
            <div class="guied-section-childs-part">
              <div class="guied-box" id="yellow"></div>
              <div class="text-guide">Yellow :- Cough</div>
            </div>
            <div class="guied-section-childs-part">
              <div class="guied-box" id="blue"></div>
              <div class="text-guide">Blue :- Fever</div>
            </div>

            <div class="show-an-pieChart-toShow-Data">
              <canvas id="myChartOne"></canvas>
            </div>
          </div>
        </div>

        <div class="zone-guide-section">
          AI Outbreak Predication in Zones in Map
        </div>

        <div class="table-section-risk-zone">
          <table>
            <tr>
              <th>
                {" "}
                <div class="parent-div-th">
                  {" "}
                  <div class="color-boxes" id="orange"></div>
                  <div class="text-in-th">Dengue</div>{" "}
                </div>{" "}
              </th>
              <th>
                {" "}
                <div class="parent-div-th">
                  {" "}
                  <div class="color-boxes" id="red"></div>
                  <div class="text-in-th">Malaria</div>{" "}
                </div>{" "}
              </th>
              <th>
                {" "}
                <div class="parent-div-th">
                  {" "}
                  <div class="color-boxes" id="yellow"></div>
                  <div class="text-in-th">Cough</div>{" "}
                </div>{" "}
              </th>
              <th>
                {" "}
                <div class="parent-div-th">
                  {" "}
                  <div class="color-boxes" id="blue"></div>
                  <div class="text-in-th">Fever</div>{" "}
                </div>{" "}
              </th>
            </tr>
            <tr>
              <td id="city1">Sangli</td>
              <td id="city2">Ashta</td>
              <td id="city3">Sangli</td>
              <td id="city4">Sangli</td>
            </tr>
            <tr>
              <td id="break1">Outbreak</td>
              <td id="break2">Outbreak</td>
              <td id="break3">Not Outbreak</td>
              <td id="break4">Outbreak</td>
            </tr>
            <tr>
              <td>
                <button class="send-responce-table-section">View in Map</button>
              </td>
              <td>
                <button class="send-responce-table-section">View in Map</button>
              </td>
              <td>
                <button class="send-responce-table-section">View in Map</button>
              </td>
              <td>
                <button class="send-responce-table-section">View in Map</button>
              </td>
            </tr>
          </table>
        </div>

        <div class="line-seperating-zone"></div>
      </div>
    </>
  );
};

export default FAQ;
