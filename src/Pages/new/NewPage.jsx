import "./new.scss";
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const NewPage = ({ inputs, title }) => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!userId) return;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userToEdit = users.find((u) => String(u.id) === String(userId));
    if (userToEdit) {
      setFormData(userToEdit);
      // If the user already has a stored image string, we can show it
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // NEW: Helper to convert file to persistent string
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    let finalImageData = formData.img || "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    // If a new file was picked, convert it to Base64
    if (file) {
      finalImageData = await convertToBase64(file);
    }

    const newUserObj = { 
      ...formData, 
      img: finalImageData, 
      status: formData.status || "Active" 
    };

    const updatedUsers = userId
      ? users.map((u) => (String(u.id) === String(userId) ? { ...u, ...newUserObj } : u))
      : [{ id: Date.now(), ...newUserObj }, ...users];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/users");
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <Box className="formWrapper">
          <Typography className="pageTitle">{title}</Typography>
          <Typography className="pageSubtitle">
            Fill in the information to {userId ? "update" : "create"} the profile
          </Typography>

          <Card className="formCard">
            <CardContent sx={{ p: 4 }}>
              <Box className="avatarSection">
                <Avatar
                  src={
                    file 
                      ? URL.createObjectURL(file) 
                      : (formData.img || "https://cdn-icons-png.flaticon.com/512/149/149071.png")
                  }
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <label htmlFor="fileUpload">
                  <input
                    hidden
                    id="fileUpload"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <Button
                    variant="outlined"
                    className="uploadBtn"
                    startIcon={<DriveFolderUploadOutlinedIcon />}
                    component="span"
                  >
                    Upload Photo
                  </Button>
                </label>
              </Box>

              <Box sx={{ mt: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    {inputs.map((input) => (
                      <Grid item xs={12} sm={6} key={input.id}>
                        <TextField
                          className="inputField"
                          fullWidth
                          label={input.label}
                          name={input.name}
                          type={input.type}
                          variant="outlined"
                          InputLabelProps={{ shrink: true }}
                          value={formData[input.name] || ""}
                          onChange={handleChange}
                        />
                      </Grid>
                    ))}
                  </Grid>

                  <Box className="submitBox">
                    <Button 
                      type="submit" 
                      variant="contained" 
                      className="submitBtn"
                    >
                      {userId ? "Update User" : "Save User"}
                    </Button>
                  </Box>
                </form>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default NewPage;