import React from "react";
import "./styles.css";
import { DashContainer, Header } from "../components";

const Dashboard = () => {
  return (
    <div className="dashboard-main-container">
      <Header />
      <DashContainer />
    </div>
  );
};

export default Dashboard;
