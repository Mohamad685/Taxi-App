import React from "react";
import './rightContainer.css'
import {
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsFillBellFill,
  } from "react-icons/bs";

function RightContainer() {
  return (
    <div>
      <div className="main-title flex">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card flex">
          <div className="card-items flex">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card flex">
          <div className="card-items flex">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card flex">
          <div className="card-items flex">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card flex">
          <div className="card-items flex">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
