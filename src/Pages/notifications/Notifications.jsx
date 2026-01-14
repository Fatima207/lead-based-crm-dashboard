import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";
import "./notifications.scss";

import { Box, Typography, IconButton, Paper, Button } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

import { useEffect, useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // LOAD NOTIFICATIONS
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("notifications"));

    if (stored && stored.length > 0) {
      setNotifications(stored);
    } else {
      const defaultNotifications = [
        {
          id: 1,
          title: "New User Registered",
          message: "A new user has been added to the system",
          time: "2 minutes ago",
          read: false,
        },
        {
          id: 2,
          title: "Order Placed",
          message: "New order SK2541 has been created",
          time: "1 hour ago",
          read: false,
        },
        {
          id: 3,
          title: "Delivery Completed",
          message: "Order SK2540 has been delivered",
          time: "Yesterday",
          read: true,
        },
      ];

      localStorage.setItem(
        "notifications",
        JSON.stringify(defaultNotifications)
      );
      setNotifications(defaultNotifications);
    }
  }, []);

  // MARK AS READ
  const markRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updated);
    localStorage.setItem("notifications", JSON.stringify(updated));
  };

  // DELETE
  const removeNotification = (id) => {
    const updated = notifications.filter((n) => n.id !== id);
    setNotifications(updated);
    localStorage.setItem("notifications", JSON.stringify(updated));
  };

  return (
    <div className="notifications">
      <Sidebar />
      <div className="notificationsContainer">
        <Navbar />

        <Box p={3}>
          <Typography variant="h4" fontWeight={600} mb={3}>
            Notifications
          </Typography>

          {notifications.length === 0 && (
            <Typography>No notifications available</Typography>
          )}

          {notifications.map((n) => (
            <Paper
              key={n.id}
              className={`notificationCard ${n.read ? "read" : ""}`}
              elevation={2}
            >
              <div className="left">
                <NotificationsIcon className="icon" />
              </div>

              <div className="center">
                <Typography variant="subtitle1" fontWeight={600}>
                  {n.title}
                </Typography>
                <Typography variant="body2">{n.message}</Typography>
                <Typography variant="caption">{n.time}</Typography>
              </div>

              <div className="right">
                {!n.read && (
                  <IconButton onClick={() => markRead(n.id)}>
                    <DoneIcon color="success" />
                  </IconButton>
                )}

                <IconButton onClick={() => removeNotification(n.id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </div>
            </Paper>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Notifications;
