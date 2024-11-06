import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import LineChartTwo from "../../components/LineChartTwo";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="150px"
        gap="20px"
      >
       

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
               AI Diseases Outbreak Predication 
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Graph Information - Diseases Outbreak 
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color="lightgreen"
                variant="h5"
                fontWeight="600"
              >
                Diseases
              </Typography>
            </Box>
            <Box>
              <Typography
                color="lightgreen"
                variant="h5"
                fontWeight="600"
              >
                New Patients
              </Typography>
            </Box>
            <Box>
              <Typography
                color="lightgreen"
                variant="h5"
                fontWeight="600"
              >
                Recover
              </Typography>
            </Box>
            <Box>
              <Typography
                color="lightgreen"
                variant="h5"
                fontWeight="600"
              >
                Death
              </Typography>
            </Box>
            <Box>
              <Typography
                color="lightgreen"
                variant="h5"
                fontWeight="600"
              >
                Color
              </Typography>
            </Box>
            
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                Malaria
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>15</Box>
            <Box color={colors.grey[100]}>8</Box>
            <Box color={colors.grey[100]}>1</Box>
            <Box
              backgroundColor="red"
              p="5px 10px"
              borderRadius="4px"
              width="60px"
              textAlign="center"
            >
              Red
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                Dengue
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>22 </Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box color={colors.grey[100]}>3</Box>
            <Box
              backgroundColor="darkgreen"
              p="5px 10px"
              borderRadius="4px"
              width="60px"
              textAlign="center"
            >
              Green
            </Box>
          </Box>


          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                Fever
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>32 </Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box color={colors.grey[100]}>0</Box>
            <Box
              backgroundColor="blue"
              p="5px 10px"
              borderRadius="4px"
              width="60px"
              textAlign="center"
            >
              Blue
            </Box>
          </Box>


          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                Cough
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>32 </Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box color={colors.grey[100]}>3</Box>
            <Box
              backgroundColor="black"
              p="5px 10px"
              borderRadius="4px"
              width="60px"
              textAlign="center"
            >
              Black
            </Box>
          </Box>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                AI Shortage Prediction
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
           <LineChartTwo isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Graph information - Medical Equipment Shortage
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color="lightgreen"
                variant="h5"
                fontWeight="600"
              >
                Hospital
              </Typography>
            </Box>
            <Box>
              <Typography
                color="lightgreen"
                variant="h5"
                fontWeight="600"
              >
                Medical Equipment 
              </Typography>
            </Box>
            <Box>
              <Typography
               color="lightgreen"
                variant="h5"
                fontWeight="600"
              >
                Stock Left
              </Typography>
            </Box>
            <Box>
              <Typography
             color="lightgreen"
                variant="h5"
                fontWeight="600"
              >
                Color
              </Typography>
            </Box>
            
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color="pink"
                variant="h5"
                fontWeight="600"
              >
                Kadam Hospital
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>PPE</Box>
            <Box color={colors.grey[100]}>15</Box>
            <Box
              backgroundColor="red"
              p="5px 10px"
              borderRadius="4px"
            >
              Red
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Oxygen</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>
          
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Staff</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Blood</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Pharmaceuticals</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>


          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color="pink"
                variant="h5"
                fontWeight="600"
              >
                More Hospital
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>PPE</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
              backgroundColor="blue"
              p="5px 10px"
              borderRadius="4px"
            >
              Blue
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Oxygen</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Staff</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Blood</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Pharmacetuicals</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>


          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color="pink"
                variant="h5"
                fontWeight="600"
              >
                District Hospital
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>PPE</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
              backgroundColor="green"
              p="5px 10px"
              borderRadius="4px"
            >
              Green
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Oxygen</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Staff</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Blood</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                -
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>Pharmacetuicals</Box>
            <Box color={colors.grey[100]}>12</Box>
            <Box
             
              p="5px 10px"
              borderRadius="4px"
            >
              -
            </Box>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
