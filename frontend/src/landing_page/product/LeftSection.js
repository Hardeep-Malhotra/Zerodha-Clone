// import React from "react";

// function LeftSection({
//   imageUrl,
//   productName,
//  productDecription,
//   tryDemo,
//   learnMore,
//   googlePlay,
//   appStore,
// }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6 p-5">
//           <img src={imageUrl} />
//         </div>
//         <div className="col-6 p-5 mt-5">
//           <h1>{productName}</h1>
//           <p>{productDecription}</p>
//           <div>
//             <a
//               href={tryDemo}
//               style={{ textDecoration: "none", color: "#387ed1" }}
//             >
//               Try Demo <i class="fa fa-long-arrow-right"></i>

//             </a>
//             <a
//               href={learnMore}
//               style={{
//                 marginLeft: "50px",
//                 textDecoration: "none",
//                 color: "#387ed1",
//               }}
//             >
//               Learn More <i class="fa fa-long-arrow-right"></i>

//             </a>
//           </div>
//           <div className="mt-3">
//             <a href={googlePlay}>
//               <img src="media/images/googlePlayBadge.svg" />
//             </a>
//             <a href={appStore} style={{ marginLeft: "50px" }}>
//               <img src="media/images/appstoreBadge.svg" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftSection;
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
    <div className="container-fluid px-3 px-lg-4 my-5">
      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "500px" }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-12 col-md-6">
          <h1 className="mb-3">{productName}</h1>
          <p className="text-muted">{productDecription}</p>

          {/* Links */}
          <div className="d-flex flex-wrap gap-4 mt-3">
            <a
              href={tryDemo}
              className="text-decoration-none"
              style={{ color: "#387ed1" }}
            >
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>

            <a
              href={learnMore}
              className="text-decoration-none"
              style={{ color: "#387ed1" }}
            >
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          {/* Store Badges */}
          <div className="d-flex flex-wrap gap-4 mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
