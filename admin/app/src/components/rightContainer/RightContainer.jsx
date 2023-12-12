import React from "react";
import './rightContainer.css'
import Dashboard from "../Dashboard/Dashboard";
import UsersSection from '../UsersSection/UsersSection'
import ManageDrivers from "../ManageDrivers/ManageDrivers";

function RightContainer() {
  return (
    <div>
      <Dashboard />
      <UsersSection />
      <ManageDrivers />
    </div>
  );
}

export default RightContainer;
