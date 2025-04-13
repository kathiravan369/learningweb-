import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logoimg from "../../asserts/Aurum_Logo.38df8d15.png"
import "../Navbar/NavbarBanner.css";
import Contact from "../Contact/ContactUs";

const NavbarBanner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  // Handle scroll event for sticky navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickOpenContact = () => {
    setOpenContact(true);
  };
  const handleCloseContact = () => {
    setOpenContact(false);
  };
  return (
    <div>
      {/* Navbar */}
      <div className="navmain">
      <div className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-container">
         <img className="logoimg" src={logoimg} alt="logo"/>

          {/* Hamburger Toggle */}
          <div
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
              ☰
          </div>

          {/* Menu Items */}
          <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>
            <button onClick={handleClickOpenContact} className="demo-btn">
                Get a Free Demo{" "}
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </button>
              </li>
          </ul>
        </div>
      </div>
</div>
      {/* Banner Section */}
      <header className="banner">
        <div className="banner-content">
          <h1 >

          Empower Your Future with <br /> with{" "}
            <span className="highlight">Coding</span> Skills
          </h1>
          <p style={{paddingLeft:"10%",paddingRight:"10%"}}>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
          </p>
          <button    style={{ zIndex:999  }}  className="schedule-btn" onClick={handleClickOpenContact}>Book a Demo</button>
          <Contact   style={{ zIndex:999  }} open={openContact} onClose={handleCloseContact} />
        </div>
      </header>
    </div>
  );
};

export default NavbarBanner;
 