
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

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
            <Link to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        

        {/* PROFILE */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

        {/* DROPDOWN */}
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            {/* HEADER */}
            <div className="profile-header">
              <strong>Zerodha User</strong>
              <span>hello@zerodha.com</span>
            </div>

            {/* MAIN LINKS */}
            <ul className="dropdown-list">
              <li>
                <i className="fa fa-user"></i>
                <span>My profile / Settings</span>
              </li>
              <li>
                <i className="fa fa-bar-chart"></i>
                <span>Console</span>
              </li>
              <li>
                <i className="fa fa-circle-o"></i>
                <span>Coin</span>
              </li>
              <li>
                <i className="fa fa-life-ring"></i>
                <span>Support</span>
              </li>
              <li>
                <i className="fa fa-user-plus"></i>
                <span>Invite friends</span>
              </li>
            </ul>

            <hr />

            {/* SECONDARY LINKS */}
            <ul className="dropdown-list">
              <li>
                <i className="fa  fa-map"></i>
                <span>Tour Kite</span>
              </li>
              <li>
                <i className="fa fa-keyboard-o"></i>
                <span>Keyboard shortcuts</span>
              </li>
              <li>
                <i className="fa fa-question-circle"></i>
                <span>Help</span>
              </li>
              <li className="logout">
                <i className="fa fa-sign-out"></i>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
