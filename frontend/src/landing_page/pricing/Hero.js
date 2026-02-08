// import React from "react";

// function Hero() {
//   return (
//     <div className="container">
//       <div className="row text-center mt-5">
//         <h1 className="mt-5">Charges</h1>
//         <h3 className="text-muted mt-2 fs-5">List of all charges and taxes </h3>
//       </div>
//       <div className="row p-5 mt-5 text-center">
//         <div className="col-4 p-4">
//           <img src="media/images/pricingEquity.svg" />
//           <h1 className="fs-3">Free equity delivery</h1>
//           <p className="text-muted mt-2">
//             All equity delivery investments (NSE, BSE), are absolutely free — ₹
//             0 brokerage.
//           </p>
//         </div>
//         <div className="col-4 p-4">
//           <img src="media/images/intradayTrades.svg" />
//           <h1 className="fs-3">Intraday and F&O trades</h1>
//           <p className="text-muted mt-2">
//             Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
//             intraday trades across equity, currency, and commodity trades. Flat
//             ₹20 on all option trades.
//           </p>
//         </div>
//         <div className="col-4 p-4">
//           <img src="media/images/pricingEquity.svg" />
//           <h1 className="fs-3">Free equity delivery</h1>
//           <p className="text-muted mt-2">
//             All direct mutual fund investments are absolutely free — ₹ 0
//             commissions & DP charges.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React from "react";

function Hero() {
  return (
    <div className="container-fluid px-3 px-lg-4 my-5">

      {/* Heading */}
      <div className="row text-center mb-4">
        <h1 className="mt-4">Charges</h1>
        <h3 className="text-muted mt-2 fs-6 fs-md-5">
          List of all charges and taxes
        </h3>
      </div>

      {/* Cards */}
      <div className="row text-center g-4 mt-4">

        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Equity Delivery"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted mt-2">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday Trades"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-2">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday
            trades across equity, currency, and commodity. Flat ₹20 on all
            option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Mutual Funds"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />
          <h1 className="fs-4">Free direct mutual funds</h1>
          <p className="text-muted mt-2">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
