import React from "react";
import "./admin.css";
import RightContainer from "../../components/rightContainer/RightContainer";

import { CiChat1 } from "react-icons/ci";
import { MdOutlineManageAccounts, MdOutlineSpaceDashboard} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function AdminPage() {
  return (
    <div className="admin-container flex">
      <div className="sidebar-section">
          <div className="sidebar-title">
            <div>Admin Page</div>
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MdOutlineSpaceDashboard /> Dashboard
            </li>
            <li className="sidebar-list-item">
              <FaRegUser /> Users
            </li>
            <li className="sidebar-list-item">
              <MdOutlineManageAccounts /> Manage Drivers
            </li>
            <li className="sidebar-list-item">
              <CiChat1 /> Messages
            </li>
          </ul>
      </div>
      <div className="right-section">
        <RightContainer />
      </div>
    </div>
  );
}

export default AdminPage;
