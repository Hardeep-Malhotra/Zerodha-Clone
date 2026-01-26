
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // ✅ Read directly from localStorage
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  // ✅ Logout API + redirect
  const handleLogout = async () => {
    await fetch("http://localhost:3002/auth/logout", {
      credentials: "include",
    });

    localStorage.clear();
    window.location.href = "http://localhost:3000/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        {/* Profile Icon */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {username ? username[0].toUpperCase() : "U"}
          </div>
          <p className="username">{username || "USER"}</p>
        </div>

        {/* Dropdown */}
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <div className="profile-header">
              <strong>{username || "Zerodha User"}</strong>
              <span>{email || "hello@zerodha.com"}</span>
            </div>

            <ul className="dropdown-list">
              <li><i className="fa fa-user"></i> My profile</li>
              <li><i className="fa fa-bar-chart"></i> Console</li>
              <li><i className="fa fa-circle-o"></i> Coin</li>
              <li><i className="fa fa-life-ring"></i> Support</li>
              <li><i className="fa fa-user-plus"></i> Invite friends</li>
            </ul>

            <hr />

            <ul className="dropdown-list">
              <li><i className="fa fa-map"></i> Tour Kite</li>
              <li><i className="fa fa-keyboard-o"></i> Shortcuts</li>
              <li><i className="fa fa-question-circle"></i> Help</li>

              <li className="logout" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
