import React from "react";

function Featured() {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p className="featured-text">
        Selected listings by City, State, & Zip based on views.
      </p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src="/assets/house1.jpg" alt="" />
        <img src="/assets/bed1.jpg" alt="" />
        <img src="/assets/bed2.jpg"  alt="" />
        <img src="/assets/kitchen.jpg"  alt="" />
        <img src="/assets/bath1.jpg"  alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House for Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas. Including media room,
            workout facility, and built-in sauna.{" "}
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>

      {/* Section section */}
      <div className="container">
        <img className="order-2" src="/assets/bed3.jpg"  alt="" />
        <img className="order-3" src="/assets/bed4.jpg"  alt="" />

        <img className="span-3 image-grid-row-2 order-1" src="/assets/house2.jpg"  alt="" />

        <img className="order-4" src="/assets/bath2.jpg"  alt="" />
        <img className="order-5" src="/assets/living-room.jpg"  alt="" />

        <div className="span-2 right-img-details order-7">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas. Including media room,
            workout facility, and built-in sauna.{" "}
          </p>
          <button className="btn">View Listing</button>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House for Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
