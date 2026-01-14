import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import logo from "../../assets/logo.png";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logoBox">
            <img src={logo} alt="logo" className="logoImg" />
            <span className="logoText">lamadmin</span>
          </div>
        </Link>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/delivery" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/stats" className="link">
            <li>
              <InsertChartIcon />
              <span>Stats</span>
            </li>
          </Link>
          <Link to="/notifications" className="link">
            <li>
              <NotificationsIcon />
              <span>Notifications</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/system-health" className="link">
            <li>
              <SettingsSystemDaydreamOutlinedIcon />
              <span>System Health</span>
            </li>
          </Link>
          <Link to="/logs" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <SettingsOutlinedIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>

          <Link
            to="/logout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>
              <LogoutOutlinedIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
      {/* THE THEME BUTTONS */}
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
          title="Light Mode"
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
          title="Dark Mode"
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
