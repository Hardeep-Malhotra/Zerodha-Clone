import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 p-5">
        <h1 className="text-muted fs-2">Zerodha Products</h1>
        <h3 className="mt-3 text-muted fs-5">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a
            href="https://zerodha.com/investments"
            style={{ textDecoration: "none", color: "#387ed1" }}
          >
            investment offerings <i class="fa fa-long-arrow-right"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
