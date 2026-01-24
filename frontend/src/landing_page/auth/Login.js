

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/login",
        formData,
        { withCredentials: true },
      );

      if (res.data.success) {
        // Redirect to dashboard frontend
        window.location.href = "http://localhost:3001";
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log("Login Error:", err);
      alert("Login failed!");
    }
  };

  return (
    <div className="container signup-container">
      {/* Heading */}
      <div className="text-center text-muted mb-5">
        <h1 className="fw-bold">Open a free demat and trading account</h1>
        <p className="text-muted mt-3">
          Start investing brokerage free and join a community of 1+ crore
          investors and traders
        </p>
      </div>

      {/* Main Section */}
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 mt-4 text-center signup-image">
          <img
            src="/media/images/account-open.png"
            alt="Login Banner"
            className="img-fluid"
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 mt-4 signup-form">
          <h2 className="mb-3 fw-semibold">Login</h2>
          <p className="text-muted">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>

          <input
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            className="btn btn-primary w-100 signup-btn"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-center text-muted small mt-5">
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry.
        </p>

        <p className="text-center text-muted small">
          Please visit this article to know more.
        </p>

        <p className="text-center text-muted small">
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the offline forms.
        </p>
      </div>
    </div>
  );
}

export default Login;
