import "./settings.scss";
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";

import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
  Button,
} from "@mui/material";
import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotifications: true,
    autoUpdates: true,
  });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.checked });
  };

  const handleSave = () => {
    localStorage.setItem("appSettings", JSON.stringify(settings));
    alert("Settings saved successfully");
  };

  return (
    <div className="settings">
      <Sidebar />

      <div className="settingsContainer">
        <Navbar />

        <Box sx={{ p: 3, maxWidth: 700 }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Settings
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Manage application preferences
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <FormControlLabel
            control={
              <Switch
                checked={settings.darkMode}
                onChange={handleChange}
                name="darkMode"
              />
            }
            label="Enable Dark Mode"
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            control={
              <Switch
                checked={settings.emailNotifications}
                onChange={handleChange}
                name="emailNotifications"
              />
            }
            label="Email Notifications"
          />

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            control={
              <Switch
                checked={settings.autoUpdates}
                onChange={handleChange}
                name="autoUpdates"
              />
            }
            label="Enable Auto Updates"
          />

          <Box sx={{ mt: 4 }}>
            <Button variant="contained" onClick={handleSave}>
              Save Settings
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Settings;
