import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./logout.scss";

import { Box, CircularProgress, Typography, Paper } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.clear();
      navigate("/login", { replace: true });
    }, 2000); // 2 seconds delay for UX

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box className="logoutPage">
      <Paper className="logoutCard" elevation={3}>
        <LogoutOutlinedIcon className="logoutIcon" />

        <Typography variant="h5" fontWeight={600} mt={2}>
          Logging you out
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={1}>
          Please wait while we securely log you out...
        </Typography>

        <CircularProgress sx={{ mt: 3 }} />
      </Paper>
    </Box>
  );
};

export default Logout;
