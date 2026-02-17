import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
// http://localhost:3002/auth/verify
const Home = () => {
  useEffect(() => {
    fetch("https://zerodha-clone-backend-gj61.onrender.com/auth/verify", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          window.location.href = "http://localhost:3000/login";
        }
      });
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
