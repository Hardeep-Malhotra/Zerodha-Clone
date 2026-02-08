// import React from 'react'

// function Hero() {
//     return (
//         <div className='container p-5 text-center mb-5'>
//             <div className='row'>
//                 <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
//             </div>

//             <h1 className='mt-5'>Inves in everything</h1>
//             <p>Onilne platform to invest in stocks, derivatives, mutual funds, and more</p>
//             <button  className='p-2 btn btn-primary mb-5' style={{width:"20%" , margin: "0 auto" }}>Signup now</button>
//         </div>
//     );
// }

// export default Hero;

import React from "react";

function Hero() {
  return (
    <div className="container-fluid px-3 px-md-5 text-center mb-5">
      
      {/* Image */}
      <div className="row justify-content-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero"
          className="img-fluid mb-4"
          style={{ maxWidth: "900px" }}
        />
      </div>

      {/* Text */}
      <h1 className="mt-4 fw-bold">
        Invest in everything
      </h1>

      <p className="text-muted px-2 px-md-5">
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </p>

      {/* Button */}
      <button
        className="btn btn-primary px-4 py-2 mt-3"
        style={{ maxWidth: "200px", width: "100%" }}
      >
        Signup now
      </button>

    </div>
  );
}

export default Hero;
