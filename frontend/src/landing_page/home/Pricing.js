
// import React from "react";

// function Pricing() {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-4">
//                     <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
//                     <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
//                     <a href="" style={{ textDecoration: "none" }}>
//                         See pricing <i className="fa fa-long-arrow-right"></i>

//                     </a>
//                 </div>
//                 <div className="col-2"></div>
//                 <div className="col-6 mb-5">
//                     <div className="row text-center">
//                         <div className="col border p-3">
//                             <h1 className="mb-3">₹0</h1>
//                             <p>
//                                 Free equity delivery and
//                                 <br /> direct mutual funds
//                             </p>
//                         </div>
//                         <div className="col border p-3">
//                             <h1 className="mb-3">₹20</h1>
//                             <p>Intraday and F&O</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pricing;
import React from "react";

function Pricing() {
  return (
    <div className="container-fluid px-3 px-md-5 my-5">
      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* RIGHT CARDS */}
        <div className="col-12 col-md-8">
          <div className="row text-center g-3">

            <div className="col-12 col-sm-6">
              <div className="border p-4 h-100">
                <h1 className="mb-3">₹0</h1>
                <p className="mb-0">
                  Free equity delivery and <br />
                  direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="border p-4 h-100">
                <h1 className="mb-3">₹20</h1>
                <p className="mb-0">Intraday and F&O</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
