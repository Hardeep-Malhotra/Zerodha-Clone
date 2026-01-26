import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3002/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        // ✅ Store session
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", email);

        // ✅ Redirect to Dashboard (important fix)
        window.location.href = "http://localhost:3001";
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="container signup-container">
      <div className="text-center text-muted mb-5">
        <h1 className="fw-bold">Welcome Back</h1>
        <p>Login to your Zerodha account</p>
      </div>

      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center">
          <img
            src="/media/images/account-open.png"
            alt="login"
            className="img-fluid"
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6">
          <h2 className="mb-3 fw-semibold">Login</h2>
          <p className="text-muted">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>

          <input
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleOnChange}
          />

          <input
            className="form-control mb-3"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />

          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
