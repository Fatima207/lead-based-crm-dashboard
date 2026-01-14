import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";
import "./systemHealth.scss";

import { Box, Grid, Typography, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StorageIcon from "@mui/icons-material/Storage";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

const SystemHealth = () => {
  const healthData = [
    {
      title: "Server Status",
      value: "Online",
      icon: <CheckCircleIcon />,
      color: "#2e7d32",
    },
    {
      title: "API Status",
      value: "Connected",
      icon: <CloudDoneIcon />,
      color: "#1976d2",
    },
    {
      title: "Memory Usage",
      value: "68%",
      icon: <MemoryIcon />,
      color: "#ed6c02",
    },
    {
      title: "Storage Usage",
      value: "45%",
      icon: <StorageIcon />,
      color: "#9c27b0",
    },
  ];

  return (
    <div className="systemHealth">
      <Sidebar />
      <div className="systemHealthContainer">
        <Navbar />

        <Box p={3}>
          <Typography variant="h4" fontWeight={600} mb={3}>
            System Health
          </Typography>

          <Grid container spacing={3}>
            {healthData.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  className="healthCard"
                  elevation={3}
                  style={{ borderLeft: `5px solid ${item.color}` }}
                >
                  <div className="left">
                    <Typography variant="subtitle2">
                      {item.title}
                    </Typography>
                    <Typography variant="h5" fontWeight={600}>
                      {item.value}
                    </Typography>
                  </div>

                  <div
                    className="icon"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography variant="caption" mt={3} display="block">
            Last checked: {new Date().toLocaleString()}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default SystemHealth;
