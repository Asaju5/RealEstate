import React from "react";

function Best() {
  return (
    <div className="best">
      <h1>Find Best Rated Properties</h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className="container">
        <img src="/assets/apt1.jpeg" alt="" />
        <img src="/assets/apt2.jpeg" alt="" />
        <img src="/assets/apt3.jpeg" alt="" />
      </div>
      <button className="btn">View All</button>
    </div>
  );
}

export default Best;
