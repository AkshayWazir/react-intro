import "./App.css";
import React from "react";
import { ButtonTest, CounterScreen, Dashboard, LoginPage, NewLogin, PopupWindows, ShopDashboard } from "./screens";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Link to="/buttonTest">To Button Test</Link>
      <Link to="/counterScreen">To Counter Screen</Link>
      <Link to="/dashboard">To Dashboard</Link>
      <Link to="/loginPage">To login Page</Link>
      <Link to="/newLogin">To New Login</Link>
      <Link to="/popupWindow">To Popup Window</Link>
      <Link to="/shopDashboard">To Shop Dashboard</Link>
      <Routes>
        <Route path="/buttonTest" element={<ButtonTest />} />
        <Route path="/counterScreen" element={<CounterScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/newLogin" element={<NewLogin />} />
        <Route path="/popupWindow" element={<PopupWindows />} />
        <Route path="/shopDashboard" element={<ShopDashboard />} />
      </Routes>
    </Router>
  );
}
