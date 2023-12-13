import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

function UserItem({ manageDrivers, user }) {
  return (
    <>
      {manageDrivers ? (
        <tr>
          <td>1</td>
          <td>15</td>
          <td>123456</td>
          <td>
            <button className="manage-drivers-btn reject-btn">Reject</button>
            <button className="manage-drivers-btn accept-btn">Accept</button>
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
            <i className="edit-btn">
              <CiEdit />
            </i>
            <i className="delete-btn">
              <MdDeleteOutline />
            </i>
          </td>
        </tr>
      )}
    </>
  );
}

export default UserItem;
