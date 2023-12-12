import React from "react";
import './rightContainer.css'
import Dashboard from "../Dashboard/Dashboard";
import UsersSection from '../UsersSection/UsersSection'
import ManageDrivers from "../ManageDrivers/ManageDrivers";
import MessagesSection from "../Messages/MessagesSection";

function RightContainer() {
  return (
    <div>
      <Dashboard />
      <UsersSection />
      <ManageDrivers />
      <MessagesSection />
    </div>
  );
}

export default RightContainer;
