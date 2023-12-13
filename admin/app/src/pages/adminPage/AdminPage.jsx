import React, { useState } from "react";
import "./admin.css";
import RightContainer from "../../components/rightContainer/RightContainer";

import { CiChat1 } from "react-icons/ci";
import {
  MdOutlineManageAccounts,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function AdminPage() {
  const [sectionState, setSectionState] = useState({
    dashboard: 1,
    users: 0,
    manageDrivers: 0,
    messages: 0,
  });

  const onDashboardClick = () => {
    setSectionState({
      dashboard: 1,
      users: 0,
      manageDrivers: 0,
      messages: 0,
    });
  };

  const onUsersClick = () => {
    setSectionState({
      dashboard: 0,
      users: 1,
      manageDrivers: 0,
      messages: 0,
    });
  };

  const onManageClick = () => {
    setSectionState({
      dashboard: 0,
      users: 0,
      manageDrivers: 1,
      messages: 0,
    });
  };

  const onMessagesClick = () => {
    setSectionState({
      dashboard: 0,
      users: 0,
      manageDrivers: 0,
      messages: 1,
    });
  };


  return (
    <div className="admin-container flex">
      <div className="sidebar-section">
        <div className="sidebar-title">
          <div>Admin Page</div>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item" onClick={onDashboardClick}>
            <MdOutlineSpaceDashboard /> Dashboard
          </li>
          <li className="sidebar-list-item" onClick={onUsersClick}>
            <FaRegUser /> Users
          </li>
          <li className="sidebar-list-item" onClick={onManageClick}>
            <MdOutlineManageAccounts /> Manage Drivers
          </li>
          <li className="sidebar-list-item" onClick={onMessagesClick}>
            <CiChat1 /> Messages
          </li>
        </ul>
      </div>
      <div className="right-section">
        <RightContainer sectionState={sectionState}/>
      </div>
    </div>
  );
}

export default AdminPage;
