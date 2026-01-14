import { BrowserRouter, Routes, Route } from "react-router-dom";
import Delivery from "./Pages/delivery/Delivery";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import NewPage from "./Pages/new/NewPage";
import Products from "./Pages/products/Products";
import Orders from "./Pages/orders/Orders";
import NewOrder from "./Pages/orders/NewOrder";
import { userInputs } from "./formSource";
import Stats from "./Pages/stats/Stats";
import Notifications from "./Pages/notifications/Notifications";
import SystemHealth from "./Pages/systemHealth/SystemHealth";
import Logs from "./Pages/logs/Logs";
import Settings from "./Pages/settings/Settings";
import Profile from "./Pages/profile/Profile";
import Logout from "./Pages/logout/Logout";
import "./style/dark.scss";

// 1. IMPORT THESE TWO
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  // 2. GET THE DARKMODE STATE
  const { darkMode } = useContext(DarkModeContext);

  return (
    // 3. APPLY THE CLASS DYNAMICALLY
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* USERS */}
          <Route path="/users" element={<List />} />
          <Route
            path="/users/new"
            element={<NewPage inputs={userInputs} title="Add New User" />}
          />
          <Route
            path="/users/edit/:userId"
            element={<NewPage inputs={userInputs} title="Edit User" />}
          />
          <Route path="/users/:userId" element={<Single />} />

          {/* PRODUCTS */}
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/new" element={<NewOrder />} />

          <Route path="/delivery" element={<Delivery />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/system-health" element={<SystemHealth />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;