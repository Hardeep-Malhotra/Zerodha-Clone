
import React from "react";

function Hero() {
  return (
    <div className="container-fluid px-3 px-lg-4 border-bottom mb-5">
      <div className="row text-center py-4 py-md-5 mt-4">

        <h1 className="text-muted fs-3 fs-md-2">
          Zerodha Products
        </h1>

        <h3 className="mt-3 text-muted fs-6 fs-md-5">
          Sleek, modern, and intuitive trading platforms
        </h3>

        <p className="mt-3 mb-4">
          Check out our{" "}
          <a
            href="https://zerodha.com/investments"
            className="text-decoration-none"
            style={{ color: "#387ed1" }}
          >
            investment offerings{" "}
            <i className="fa fa-long-arrow-right"></i>
          </a>
        </p>

      </div>
    </div>
  );
}

export default Hero;
