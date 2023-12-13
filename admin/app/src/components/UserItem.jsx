import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

function UserItem({ manageDrivers }) {
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
          <td>1</td>
          <td>ahmad</td>
          <td>rammal</td>
          <td>ahmad.rammal@gmail.com</td>
          <td>23156as4d6a5s4d894qwe89456as4d654qwe9898asd654qwe</td>
          <td>200</td>
          <td>4</td>
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
