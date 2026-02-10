

import React from "react";

function Awards() {
  return (
    <div className="container-fluid px-3 px-md-5 mt-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "500px" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 px-md-5">
          <h1 className="fw-bold mb-3">
            Largest stock broker in India
          </h1>

          <p className="mb-4 text-muted">
            1.5+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-12 col-sm-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-12 col-sm-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4"
            style={{ maxWidth: "450px" }}
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;
