import React from "react";
import "./rightContainer.css";
import Dashboard from "../Dashboard/Dashboard";
import UsersSection from "../UsersSection/UsersSection";
import ManageDrivers from "../ManageDrivers/ManageDrivers";
import MessagesSection from "../Messages/MessagesSection";

function RightContainer({ sectionState }) {
  return (
    <div>
      <div className={sectionState.dashboard === 1 ? "" : "hidden"}>
        <Dashboard />
      </div>
      <div className={sectionState.users === 1 ? "" : "hidden"}>
        <UsersSection />
      </div>
      <div className={sectionState.manageDrivers === 1 ? "" : "hidden"}>
        <ManageDrivers />
      </div>
      <div className={sectionState.messages === 1 ? "" : "hidden"}>
        <MessagesSection />
      </div>
    </div>
  );
}

export default RightContainer;
