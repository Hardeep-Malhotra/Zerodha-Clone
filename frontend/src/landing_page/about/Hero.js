
import React from "react";

function Hero() {
  return (
    <div className="container-fluid px-3 px-lg-4">

      {/* TOP HEADING */}
      <div className="row py-4 py-md-5 mt-4 text-center">
        <h1 className="text-muted fs-4 fs-md-3">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* CONTENT SECTION */}
      <div
        className="row border-top pt-4 pt-md-5 text-muted"
        style={{ fontSize: "1.05em", lineHeight: "1.9rem" }}
      >
        {/* LEFT */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company Zerodha,
            a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* RIGHT */}
        <div className="col-12 col-md-6">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a
              href="https://rainmatter.com/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
              style={{ color: "#387ed1" }}
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on the
            latest updates on our blog or see what the media is saying about us.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Hero;
