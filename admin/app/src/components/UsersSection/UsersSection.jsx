import React from "react";
import "./usersSection.css";

import UserItem from "../UserItem";
function UsersSection() {
  return (
    <div>
      <h3 className="main-title">USERS</h3>

      <table>
        <th>ID</th>
        <th>F_Name</th>
        <th>L_Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>RatingsNb</th>
        <th>Rating</th>
        <th>Options</th>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </table>
    </div>
  );
}

export default UsersSection;
