import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import "./index.css"

const Team = () => {
 
  return (
    <>

<div className="details" id="sangli-data">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Epidemiological Data Sangli</h2>
                        
                    </div>

                    <table>
                        <tr>
                          <th>Hospital Name</th>
                          <th>District</th>
                          <th>Diseases</th>
                          <th>10-Jan</th>
                          <th>11-Jan</th>
                          <th>12-Jan</th>
                          <th>13-Jan</th>
                          <th>14-Jan</th>
                          <th>15-Jan</th>
                          <th>16-Jan</th>
                          <th>17-Jan</th>
                          <th>18-Jan</th>
                          <th>19-Jan</th>
                          <th>20-Jan</th>
                          
                          
                        </tr>
                        <tr className="hosp-one">
                          <td>More Hospital</td>
                          <td>Sangli</td>
                          <td>Malaria</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-one">
                          <td>More Hospital</td>
                          <td>Sangli</td>
                          <td>Dengue</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-one">
                          <td>More Hospital</td>
                          <td>Sangli</td>
                          <td>Fever</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-one">
                          <td>More Hospital</td>
                          <td>Sangli</td>
                          <td>Cough</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-one">
                          <td>More Hospital</td>
                          <td>Sangli</td>
                          <td>Viral</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>

<br />

                        <tr className="hosp-two">
                          <td>Kadam Hospital</td>
                          <td>Sangli</td>
                          <td>Malaria</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-two">
                          <td>Kadam Hospital</td>
                          <td>Sangli</td>
                          <td>Dengue</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-two">
                          <td>Kadam Hospital</td>
                          <td>Sangli</td>
                          <td>Fever</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-two">
                          <td>Kadam Hospital</td>
                          <td>Sangli</td>
                          <td>Cough</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-two">
                          <td>Kadam Hospital</td>
                          <td>Sangli</td>
                          <td>Viral</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>

<br />

                        <tr className="hosp-three">
                          <td>District Hospital</td>
                          <td>Sangli</td>
                          <td>Malaria</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-three">
                          <td>District Hospital</td>
                          <td>Sangli</td>
                          <td>Dengue</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-three">
                          <td>District Hospital</td>
                          <td>Sangli</td>
                          <td>Fever</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-three">
                          <td>District Hospital</td>
                          <td>Sangli</td>
                          <td>Cough</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        <tr className="hosp-three">
                          <td>District Hospital</td>
                          <td>Sangli</td>
                          <td>Viral</td>
                          <td>10</td>
                          <td>5</td>
                          <td>34</td>
                          <td>55</td>
                          <td>7</td>
                          <td>12</td>
                          <td>50</td>
                          <td>98</td>
                          <td>41</td>
                          <td>51</td>
                          <td>23</td>
                        </tr>
                        
                        
                      
                    </table>
                </div>
            </div>

    
    </>
  );
};

export default Team;
