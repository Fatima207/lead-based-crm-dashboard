import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";
import "./stats.scss";

import { Box, Grid, Typography, Paper } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

const Stats = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.total || 0),
    0
  );

  const pendingOrders = orders.filter(
    (order) => order.status?.toLowerCase() === "pending"
  ).length;

  const statsData = [
    {
      title: "Total Users",
      value: users.length,
      icon: <PeopleIcon />,
      color: "#1976d2",
    },
    {
      title: "Total Orders",
      value: orders.length,
      icon: <ShoppingCartIcon />,
      color: "#9c27b0",
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue}`,
      icon: <PaymentsIcon />,
      color: "#2e7d32",
    },
    {
      title: "Pending Orders",
      value: pendingOrders,
      icon: <PendingActionsIcon />,
      color: "#ed6c02",
    },
  ];

  return (
    <div className="stats">
      <Sidebar />
      <div className="statsContainer">
        <Navbar />

        <Box p={3}>
          <Typography variant="h4" fontWeight={600} mb={3}>
            Statistics Overview
          </Typography>

          <Grid container spacing={3}>
            {statsData.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={3}
                  className="statCard"
                  style={{ borderLeft: `5px solid ${item.color}` }}
                >
                  <div className="statLeft">
                    <Typography variant="subtitle2">{item.title}</Typography>
                    <Typography variant="h5" fontWeight={600}>
                      {item.value}
                    </Typography>
                  </div>

                  <div
                    className="statIcon"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Stats;
