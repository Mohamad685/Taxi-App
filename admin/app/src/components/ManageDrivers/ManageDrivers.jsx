import React , {useEffect, useState}from "react";
import UserItem from "../UserItem";

import './manageDrivers.css'

import { sendRequest } from "../../request";

function ManageDrivers() {
  const [requests, setRequests] = useState([]);

  const getDriversRequests = async() => {
    const response = await sendRequest({
      route: 'getDriversRequests',
    })

    setRequests(response.data.requests);
  }

  useEffect(() => {
    getDriversRequests();
  }, [])
  return (
    <div>
      <h3 className="main-title">MANAGE DRIVERS</h3>

      <table>
        <th>Request ID</th>
        <th>User ID</th>
        <th>Driving Licence</th>
        <th>Options</th>
        {requests.map((req) => <UserItem key={req.id} request={req} manageDrivers/>)}

      </table>
    </div>
  );
}

export default ManageDrivers;
