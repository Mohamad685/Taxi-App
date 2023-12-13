import React, {useEffect} from "react";
import "./dashboard.css";

import { sendRequest } from "../../request";

function Dashboard() {

  return (
    <div>
      <h3 className="main-title">DASHBOARD</h3>

      <div className="main-cards flex">
        <div className="card flex">
          <h3>USERS</h3>
          <h1>300</h1>
        </div>
        <div className="card flex">
          <h3>DRIVERS</h3>
          <h1>12</h1>
        </div>
        <div className="card flex">
          <h3>CLIENTS</h3>
          <h1>33</h1>
        </div>
        <div className="card flex">
          <h3>RIDES</h3>
          <h1>42</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
