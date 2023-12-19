import React, {useEffect, useState} from "react";
import "./dashboard.css";

import { sendRequest } from "../../request";

function Dashboard() {
  const [driversCount, setDriversCount] = useState(0)
  const [passengersCount, setPassengersCount] = useState(0)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalRides, setTotalRides] = useState(0)

  const getUsersCount = async() => {
    const response = await sendRequest({
      route:"getUsersAndRidesNumber"
    })
    console.log(response);
    response.data.users.map((u) => {
      if(u.type_id == 451564){
        setPassengersCount(u.count)
      }
      else if(u.type_id == 452156){
        setDriversCount(u.count)
      }
    })

    setTotalUsers(response.data.allUsers)
    setTotalRides(response.data.rides)
  }

  useEffect(() => {
    getUsersCount();
  }, [])

  return (
    <div>
      <h3 className="main-title">DASHBOARD</h3>

      <div className="main-cards flex">
        <div className="card flex">
          <h3>USERS</h3>
          <h1>{totalUsers}</h1>
        </div>
        <div className="card flex">
          <h3>DRIVERS</h3>
          <h1>{driversCount === 0 ? '0' : driversCount}</h1>
        </div>
        <div className="card flex">
          <h3>CLIENTS</h3>
          <h1>{(passengersCount) === 0 ? '0' : passengersCount}</h1>
        </div>
        <div className="card flex">
          <h3>RIDES</h3>
          <h1>{totalRides}</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
