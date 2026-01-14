import "./navbar.scss";
import { useState, useEffect, useRef, useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleToggle = (name) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  return (
    <div className="navbar">
      <div className="wrapper" ref={menuRef}>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        
        <div className="items">
          {/* 1. LANGUAGE SELECTOR */}
          <div className="item" onClick={() => handleToggle("lang")}>
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
            {activeMenu === "lang" && (
              <div className="dropdown">
                <div className="dropdownItem">English</div>
                <div className="dropdownItem">Spanish</div>
                <div className="dropdownItem">French</div>
              </div>
            )}
          </div>

          {/* 2. Update the Moon Item */}
         <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
  {darkMode ? (
    <WbSunnyOutlinedIcon className="icon" style={{ color: "orange" }} />
  ) : (
    <DarkModeOutlinedIcon className="icon" />
  )}
</div>

          {/* 3. FULLSCREEN */}
          <div className="item" onClick={() => document.documentElement.requestFullscreen()}>
            <FullscreenExitOutlinedIcon className="icon" />
          </div>

          {/* 4. NOTIFICATIONS */}
          <div className="item" onClick={() => handleToggle("notify")}>
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
            {activeMenu === "notify" && (
              <div className="dropdown listContainer">
                <div className="header">Notifications</div>
                <div className="dropdownItem"><b>New Order</b> - SK2540 placed</div>
                <div className="dropdownItem"><b>System</b> - Memory usage high</div>
                <div className="footer">View All</div>
              </div>
            )}
          </div>

          {/* 5. MESSAGES / CHAT */}
          <div className="item" onClick={() => handleToggle("chat")}>
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
            {activeMenu === "chat" && (
              <div className="dropdown listContainer">
                <div className="header">Messages</div>
                <div className="dropdownItem">
                   <p><b>Neal Matthews:</b> Where is my order?</p>
                </div>
                <div className="dropdownItem">
                   <p><b>Jamal Burns:</b> Payment sent.</p>
                </div>
                <div className="footer">Clear All</div>
              </div>
            )}
          </div>

          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>

  <div className="item" onClick={() => handleToggle("profile")}>
  <img
    src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    alt="user avatar"
    className="avatar" // Make sure this class is exactly "avatar"
  />
  {activeMenu === "profile" && (
    <div className="dropdown">
       <div className="header">My Account</div>
       <div className="dropdownItem">Profile</div>
       <div className="dropdownItem">Logout</div>
    </div>
  )}
</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;