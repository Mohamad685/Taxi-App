import React from "react";
import UserItem from "../UserItem";

import './manageDrivers.css'
function ManageDrivers() {
  return (
    <div>
      <h3 className="main-title">MANAGE DRIVERS</h3>

      <table>
        <th>Request ID</th>
        <th>User ID</th>
        <th>Driving Licence</th>
        <th>Options</th>
        <UserItem manageDrivers/>
        <UserItem manageDrivers/>
        <UserItem manageDrivers/>
        <UserItem manageDrivers/>
        <UserItem manageDrivers/>
        <UserItem manageDrivers/>
        <UserItem manageDrivers/>


      </table>
    </div>
  );
}

export default ManageDrivers;
