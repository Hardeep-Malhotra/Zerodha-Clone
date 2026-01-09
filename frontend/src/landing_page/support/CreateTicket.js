import React from "react";

function CreateTicket() {
  const iconStyle = {
    fontSize: "20px",
    marginRight: "8px",
  };

  const linkStyle = {
    textDecoration: "none",
    lineHeight: "2.5rem",
    fontSize: "18px",
    display: "block",
  };

  return (
    <div className="container">
      {/* ROW 1 */}
      <div className="row">
        <h1 fs-2 style={{ marginLeft: "30px" }}> To create a ticket, select a relevent topic </h1>

        <div className="col-4 p-5 mt-3">
          <h4 className="mb-5">
            <i className="fa fa-plus-circle" style={iconStyle}></i>
            Account Opening
          </h4>

          <a href="#" style={linkStyle}>Online Account Opening</a>
          <a href="#" style={linkStyle}>Offline Account Opening</a>
          <a href="#" style={linkStyle}>Company, Partnership and HUF Account</a>
          <a href="#" style={linkStyle}>Opening</a>
          <a href="#" style={linkStyle}>NRI Account Opening</a>
          <a href="#" style={linkStyle}>Charges at Zerodha</a>
          <a href="#" style={linkStyle}>Getting Started</a>
        </div>

        <div className="col-4 p-5 mt-3">
          <h4 className="mb-5">
            <i className="fa fa-user" style={iconStyle}></i>
            Your Zerodha Account
          </h4>

          <a href="#" style={linkStyle}>Login Credentials</a>
          <a href="#" style={linkStyle}>Account Modification and Segment Addition</a>
          <a href="#" style={linkStyle}>DP ID and bank details</a>
          <a href="#" style={linkStyle}>Your Profile</a>
          <a href="#" style={linkStyle}>Transfer and conversion of shares</a>
        </div>

        <div className="col-4 p-5 mt-3">
          <h4 className="mb-5">
            <i className="fa fa-bar-chart" style={iconStyle}></i>
            Trading & Markets
          </h4>

          <a href="#" style={linkStyle}>Margin / Leverage</a>
          <a href="#" style={linkStyle}>Kite Web and Mobile</a>
          <a href="#" style={linkStyle}>Trading FAQs</a>
          <a href="#" style={linkStyle}>Corporate Actions</a>
          <a href="#" style={linkStyle}>Sentinel</a>
          <a href="#" style={linkStyle}>Kite API</a>
          <a href="#" style={linkStyle}>Pi and other platforms</a>
          <a href="#" style={linkStyle}>Stockreports+</a>
          <a href="#" style={linkStyle}>GTT</a>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="row">
        <div className="col-4 p-5">
          <h4 className="mb-5">
            <i className="fa fa-credit-card" style={iconStyle}></i>
            Funds
          </h4>

          <a href="#" style={linkStyle}>Add money</a>
          <a href="#" style={linkStyle}>Withdraw money</a>
          <a href="#" style={linkStyle}>Add bank accounts</a>
          <a href="#" style={linkStyle}>eMandates</a>
        </div>

        <div className="col-4 p-5">
          <h4 className="mb-5">
            <i className="fa fa-desktop" style={iconStyle}></i>
            Console
          </h4>

          <a href="#" style={linkStyle}>Portfolio</a>
          <a href="#" style={linkStyle}>Corporate actions</a>
          <a href="#" style={linkStyle}>Funds statement</a>
          <a href="#" style={linkStyle}>Reports</a>
          <a href="#" style={linkStyle}>Profile</a>
          <a href="#" style={linkStyle}>Segment</a>
        </div>

        <div className="col-4 p-5">
          <h4 className="mb-5">
            <i className="fa fa-circle-thin" style={iconStyle}></i>
            Coin
          </h4>

          <a href="#" style={linkStyle}>Mutual funds</a>
          <a href="#" style={linkStyle}>National Pension Scheme (NPS)</a>
          <a href="#" style={linkStyle}>Features on Coin</a>
          <a href="#" style={linkStyle}>Payments on Coin</a>
          <a href="#" style={linkStyle}>General</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
