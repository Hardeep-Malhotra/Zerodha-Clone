// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav
//       className="navbar navbar-expand-md navbar-light bg-white border-bottom"
//       style={{ backgroundColor: "#FFF" }}
//     >
//       <div className="container-fluid px-3 py-2">
//         <Link className="navbar-brand" to="/">
//           <img
//             src="media/images/logo.svg"
//             alt="logo"
//             style={{ width: "25%" }}
//           />
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <form className="d-flex" role="search">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active text-muted"
//                   aria-current="page"
//                   to={"/signup"}
//                 >
//                   Signup
//                 </Link>
//               </li>
//               <li className="nav-item ">
//                 <Link className="nav-link active text-muted" to={"/About"}>
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item ">
//                 <Link className="nav-link active text-muted" to={"/Product"}>
//                   Product
//                 </Link>
//               </li>
//               <li className="nav-item ">
//                 <Link className="nav-link active text-muted" to={"/Pricing"}>
//                   Pricing
//                 </Link>
//               </li>
//               <li className="nav-item ">
//                 <Link className="nav-link active text-muted" to={"/Support"}>
//                   Support
//                 </Link>
//               </li>
//               {/* <li className="nav-item ">
//                                 <a className="nav-link active" >
//                                     <i class="fa fa-bars"></i>

//                                 </a>
//                             </li> */}
//             </ul>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom">
      <div className="container-fluid px-3 py-2">

        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ maxWidth: "120px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center">

            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Support">Support</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
