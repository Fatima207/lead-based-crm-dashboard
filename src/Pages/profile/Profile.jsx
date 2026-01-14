import "./profile.scss";
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";

import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Grid,
  Button,
} from "@mui/material";

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />

        <Box className="profileBox">
          <Card className="profileCard">
            <CardContent>
              <Box className="avatarBox">
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  className="avatar"
                />
                <Typography variant="h5" fontWeight={600}>
                  Munfees Fatima
                </Typography>
                <Typography className="role">Frontend Developer</Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="label">Email</Typography>
                  <Typography className="value">
                    munfees207@gmail.com
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography className="label">Phone</Typography>
                  <Typography className="value">916394598835</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography className="label">Role</Typography>
                  <Typography className="value">Frontend Developer</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography className="label">Status</Typography>
                  <Typography className="value active">Active</Typography>
                </Grid>
              </Grid>

              <Box className="btnBox">
                <Button variant="contained">Edit Profile</Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
