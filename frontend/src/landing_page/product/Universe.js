// import React from "react";

// function Universe() {
//   return (
//     <div className="container mt5">
//       <div className="row text-center">
//         <h1>The Zerodha Universe</h1>
//         <p className="mt-3">
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>
//         <div className="col-4 p-3 mt-5 ">
//           <img
//             src="media/Images/zerodhaFundhouse.png"
//             style={{ width: "40%" }}
//           />
//           <p
//             className="text-muted mt-3"
//             style={{ fontSize: "0.7em", width: "50%", marginLeft: "100px" }}
//           >
//             Our asset management venture that is creating simple and transparent
//             index funds to help you save for your goals.
//           </p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/Images/sensibullLogo.svg" style={{ width: "40%" }} />
//           <p
//             className="text-muted mt-3"
//             style={{ fontSize: "0.7em", width: "50%", marginLeft: "100px" }}
//           >
//             Options trading platform that lets you create strategies, analyze
//             positions, and examine data points like open interest, FII/DII, and
//             more.
//           </p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/Images/streakLogo.png" style={{ width: "40%" }} />
//           <p
//             className="text-muted mt-3"
//             style={{ fontSize: "0.7em", width: "50%", marginLeft: "100px" }}
//           >
//             Systematic trading platform that allows you to create and backtest
//             strategies without coding.
//           </p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/Images/smallcaselogo.png" style={{ width: "40%" }} />
//           <p
//             className="text-muted mt-3"
//             style={{ fontSize: "0.7em", width: "50%", marginLeft: "100px" }}
//           >
//             Thematic investing platform that helps you invest in diversified
//             baskets of stocks on ETFs.
//           </p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/Images/tijori.svg" style={{ width: "40%" }} />
//           <p
//             className="text-muted mt-3"
//             style={{ fontSize: "0.7em", width: "50%", marginLeft: "100px" }}
//           >
//             Investment research platform that offers detailed insights on
//             stocks, sectors, supply chains, and more.
//           </p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/Images/dittoLogo.png" style={{ width: "40%" }} />
//           <p
//             className="text-muted mt-3"
//             style={{ fontSize: "0.7em", width: "50%", marginLeft: "100px" }}
//           >
//             Personalized advice on life and health insurance. No spam and no
//             mis-selling.
//           </p>
//         </div>
//         <button
//           className="p-2 btn btn-primary mb-5 mt-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           {" "}
//           Sign up for free
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Universe;
import React from "react";

function Universe() {
  return (
    <div className="container-fluid px-3 px-lg-4 my-5">

      {/* Heading */}
      <div className="row text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Cards */}
      <div className="row text-center g-4">

        {/* Card */}
        {[
          {
            img: "media/images/zerodhaFundhouse.png",
            text:
              "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
          },
          {
            img: "media/images/sensibullLogo.svg",
            text:
              "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
          },
          {
            img: "media/images/streakLogo.png",
            text:
              "Systematic trading platform that allows you to create and backtest strategies without coding.",
          },
          {
            img: "media/images/smallcaselogo.png",
            text:
              "Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.",
          },
          {
            img: "media/images/tijori.svg",
            text:
              "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
          },
          {
            img: "media/images/dittoLogo.png",
            text:
              "Personalized advice on life and health insurance. No spam and no mis-selling.",
          },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4">
            <img
              src={item.img}
              alt="Partner"
              className="img-fluid mb-3"
              style={{ maxWidth: "160px" }}
            />
            <p className="text-muted" style={{ fontSize: "0.9em" }}>
              {item.text}
            </p>
          </div>
        ))}

      </div>

      {/* Button */}
      <div className="row justify-content-center mt-5">
        <button
          className="btn btn-primary px-4 py-2"
          style={{ maxWidth: "220px", width: "100%" }}
        >
          Sign up for free
        </button>
      </div>

    </div>
  );
}

export default Universe;
