import React, { useState } from "react";
import "./Header.css";
import nogslogo from "../assets/nogslogo.png"; 

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // prevent page jump if href="#"
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      {/* Left side: Logo + Text */}
      <div className="header-left">
        <img src={nogslogo} alt="NOGS Logo" className="logo" />
        <h2 className="site-title">
          NASHIK OBSTETRICS AND <br /> GYNAECOLOGICAL SOCIETY
        </h2>
      </div>

      {/* Right side: Navigation */}
      <nav className="nav">
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/public-corner">Public Corner</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/events">Event</a></li>

          {/* Dropdown for Members */}
          <li className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
            <a href="#" onClick={toggleDropdown}>
              Members ▾
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/membership/online">Online Membership</a></li>
                <li><a href="/membership/list">Member’s List</a></li>
                <li><a href="/membership/category">Membership Category</a></li>
              </ul>
            )}
          </li>

          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
