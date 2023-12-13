import React, {useEffect, useState} from "react";
import "./usersSection.css";
import { sendRequest } from "../../request";

import UserItem from "../UserItem";
function UsersSection() {
  const [users, setUsers] = useState([]);
  const getUsers = async() => {
    const response = await sendRequest({
      route:'getAllUsers',
      token:localStorage.getItem('token')
    })
    setUsers(response.data.users);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <h3 className="main-title">USERS</h3>

      <table>
        <th>ID</th>
        <th>F_Name</th>
        <th>L_Name</th>
        <th>Email</th>
        <th>Rating</th>
        <th>Options</th>
        {users.map((user) => <UserItem user={user}/>)}
      </table>
    </div>
  );
}

export default UsersSection;
