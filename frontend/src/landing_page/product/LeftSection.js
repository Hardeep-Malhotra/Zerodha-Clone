import React from "react";

function LeftSection({
  imageUrl,
  productName,
 productDecription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageUrl} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDecription}</p>
          <div>
            <a
              href={tryDemo}
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Try Demo <i class="fa fa-long-arrow-right"></i>

            </a>
            <a
              href={learnMore}
              style={{
                marginLeft: "50px",
                textDecoration: "none",
                color: "#387ed1",
              }}
            >
              Learn More <i class="fa fa-long-arrow-right"></i>

            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
