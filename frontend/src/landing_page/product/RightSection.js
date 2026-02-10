


import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container-fluid px-3 px-lg-4 my-5">
      <div className="row align-items-center">

        {/* CONTENT (LEFT on desktop, TOP on mobile) */}
        <div className="col-12 col-md-6 order-2 order-md-1">
          <h1 className="mb-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>

          <a
            href={learnMore}
            className="text-decoration-none"
            style={{ color: "#387ed1" }}
          >
            Learn More <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* IMAGE (RIGHT on desktop, TOP on mobile) */}
        <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "500px" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
