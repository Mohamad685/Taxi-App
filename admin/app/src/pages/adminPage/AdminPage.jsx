import React from "react";
import "./admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import RightContainer from "../../components/rightContainer/RightContainer";



function AdminPage() {
  return (
    <div className="admin-container flex">
        {/* <Sidebar className="sidebar-container"/> */}
        <div className="sidebar-section">
            <Sidebar />
        </div>
        <div className="right-section">
        <RightContainer />
        </div>


        
    </div>
  );
}

export default AdminPage;
