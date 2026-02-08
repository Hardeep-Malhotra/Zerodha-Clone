// import React from "react";

// function Hero() {
//   return (
//     <section className="container-fluid" id="supportHero">
      
//       <div className="supportTop">
//         <h4 className="supporPort">Support Portal</h4>
//         <a href="#" className="trcakticketlink">Track Tickets</a>
//       </div>

//       <div className="row supportContent  ">
//         <div className="col-6 md-6" id="leftRowDiv">
//           <h1>
//             Search for an answer or browse help topics to create a ticket
//           </h1>

//           <input
//             type="text"
//             placeholder="Eg: how do I activate F&O, why is my order getting rejected"
//           />

//           <div className="quickLinks">
//             <a href="#">Track account opening</a>
//             <a href="#">Track segment activation</a>
//             <a href="#">Intraday margins</a>
//             <a href="#">Kite user manual</a>
//           </div>
//         </div>
//        <div className="col-1"></div>
//         <div className="col-5  md-6" id="RighttRowDiv">
//           <h1>Featured</h1>
//           <ol>
//             <li>
//               <a href="#">Current Takeovers and Delisting - January 2024</a>
//             </li>
//             <li>
//               <a href="#">Latest Intraday leverages - MIS & CO</a>
//             </li>
//           </ol>
//         </div>
//       </div>

//     </section>
//   );
// }

// export default Hero;
import React from "react";

function Hero() {
  return (
    <section className="container-fluid px-3 px-md-4 px-lg-5 py-4 py-md-5" id="supportHero">

      {/* TOP BAR */}
      <div className="supportTop">
        <h4 className="supporPort">Support Portal</h4>
        <a href="#" className="trcakticketlink">Track Tickets</a>
      </div>

      {/* CONTENT */}
      <div className="row supportContent">

        {/* LEFT */}
        <div className="col-12 col-md-7" id="leftRowDiv">
          <h1>
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected"
          />

          <div className="quickLinks">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-12 col-md-5" id="RightRowDiv">
          <h1>Featured</h1>
          <ol>
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;
