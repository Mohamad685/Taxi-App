import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import { sendRequest } from "../request";

function UserItem({ manageDrivers, user , request}) {
  const handleDelete = async() => {
    const response = await sendRequest({
      method:'post',
      route:'deleteUser',
      body:{user_id: user.id},
      token: localStorage.getItem('token')
    })
  }

  const acceptDriver = async() => {
    const response = await sendRequest({
      method:'post',
      route:`accept-driver/${request.id}`,
    })
  }

  const rejectDriver = async() => {
    const response = await sendRequest({
      method:'post',
      route:`reject-driver/${request.id}`,
    })
  }
  return (
    <>
      {manageDrivers ? (
        <tr>
          <td>{request.id}</td>
          <td>{request.user_id}</td>
          <td>{request.License}</td>
          <td>
            <button className="manage-drivers-btn reject-btn" onClick={rejectDriver}>Reject</button>
            <button className="manage-drivers-btn accept-btn" onClick={acceptDriver}>Accept</button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>{user.id}</td>
          <td>
            <i className="edit-btn" >
              <CiEdit />
            </i>
            <i className="delete-btn" onClick={handleDelete}>
              <MdDeleteOutline />
            </i>
          </td>
        </tr>
      )}
    </>
  );
}

export default UserItem;
