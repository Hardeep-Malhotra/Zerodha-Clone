// import React from "react";

// function Brokerage() {
//   return (
//     <div className="container">
//       <div className="row p-5 mt-5 text-center border-top">
//         <div className="col-8 p-4">
//           <h3 className="fs-5 mb-4">
//             <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
//               Brokerage Calculator
//             </a>
//           </h3>
//           <ul
//             className="text-muted"
//             style={{ textAlign: "left", lineHeight: "2.5" }}
//           >
//             <li style={{ fontSize: "0.7em" }}>
//               Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
//               GST per order.
//             </li>
//             <li style={{ fontSize: "0.7em" }}>
//               Digital contract notes will be sent via e-mail.
//             </li>
//             <li style={{ fontSize: "0.7em" }}>
//               Physical copies of contract notes, if required, shall be charged
//               ₹20 per contract note. Courier charges apply.
//             </li>
//             <li style={{ fontSize: "0.7em" }}>
//               For NRI account (non-PIS), 0.5% or ₹100 per executed order for
//               equity (whichever is lower).
//             </li>
//             <li style={{ fontSize: "0.7em" }}>
//               For NRI account (PIS), 0.5% or ₹200 per executed order for equity
//               (whichever is lower).
//             </li>
//             <li style={{ fontSize: "0.7em" }}>
//               If the account is in debit balance, any order placed will be
//               charged ₹40 per executed order instead of ₹20 per executed order.
//             </li>
//           </ul>
//         </div>
//         <div className="col-4 p-4">
//           <h3 className="fs-5">
//             <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
//               List Of charges
//             </a>
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Brokerage;
import React from "react";

function Brokerage() {
  return (
    <div className="container-fluid px-3 px-lg-4 my-5">
      <div className="row text-center border-top pt-4 pt-md-5">

        {/* LEFT CONTENT */}
        <div className="col-12 col-md-8 mb-4 mb-md-0">
          <h3 className="fs-5 mb-4">
            <a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>
              Brokerage Calculator
            </a>
          </h3>

          <ul
            className="text-muted text-start"
            style={{ lineHeight: "2" }}
          >
            <li style={{ fontSize: "0.85em" }}>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li style={{ fontSize: "0.85em" }}>
              Digital contract notes will be sent via e-mail.
            </li>
            <li style={{ fontSize: "0.85em" }}>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li style={{ fontSize: "0.85em" }}>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li style={{ fontSize: "0.85em" }}>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li style={{ fontSize: "0.85em" }}>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* RIGHT LINK */}
        <div className="col-12 col-md-4 d-flex align-items-start justify-content-center justify-content-md-start">
          <h3 className="fs-5 mt-3 mt-md-0">
            <a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>
              List of charges
            </a>
          </h3>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;
