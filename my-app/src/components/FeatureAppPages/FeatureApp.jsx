import React, { useState, } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../../asserts/symbol.2d89ec5c.svg";
import bg2 from "../../asserts/ausalesellipse.12571d3a.png";
import bg1 from "../../asserts/Ellipse.bc4408b9.png";
import bg3 from "../../asserts/aushopellipse.2602e1a6.png";
import "./FeatureApp.css";
import { motion } from "framer-motion";
import Contact from "../Contact/ContactUs";
const FeaturedApps = () => {
  const [openContact, setOpenContact] = React.useState(false);
  const handleClickOpenContact = () => {
    setOpenContact(true);
  };
  const handleCloseContact = () => {
    setOpenContact(false);
  };
  return (
    <section className="featured-apps">
      <motion.div
       initial={{ opacity: 0,  }}
       whileInView={{ opacity: 1,}}
       transition={{
         duration: 1.5,
         delay: 0.4, // Optional delay for staggered effect
         ease: "easeInOut",
       }}
      >
        <h5>FEATURED Coding</h5>
      </motion.div>

      <motion.div
      initial={{ opacity: 0,  }}
      whileInView={{ opacity: 1,}}
      transition={{
        duration: 1.5,
        delay: 0.4, // Optional delay for staggered effect
        ease: "easeInOut",
      }}
      >
        <h2 className="section-title">
        EXPLORE COURSES</h2>
      </motion.div>

      <br/> 
      <motion.div
       initial={{ opacity: 0,  }}
       whileInView={{ opacity: 1,}}
       transition={{
         duration: 1.5,
         delay: 0.4, // Optional delay for staggered effect
         ease: "easeInOut",
       }}
      >
        <div className="apps-container">
          {/* AU PAY Card */}
          <div className="app-card green">
            <img className="bg" src={bg1} alt="bg" />
            <div className="app-header">
              <img src={logo} alt="logo" className="title-img" />
              <h3 className="app-title"> Full Stack MERN Developer </h3>
            </div>
            <p className="app-description">
            Expert in MongoDB, Express.js, React.js, and Node.js
            </p>
            <p className="app-details">
            Build scalable web applications with modern JavaScript tech. From responsive frontends to powerful APIs and real-time data handling.
            </p>
            <button onClick={handleClickOpenContact} className="app-button green-btn">
              {" "}
              Explore Skills {" "}
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
             
            </button>
          </div>

          {/* AU SALES Card */}
          <div className="app-card yellow">
            <img className="bg" src={bg2} alt="bg" />
            <div className="app-header">
              <img src={logo} alt="logo" className="title-img" />
              <h3 className="app-title">Database Engineer</h3>
            </div>
            <p className="app-description">
            Specialist in Data Architecture and Optimization
            </p>
            <p className="app-details">
            Design, maintain, and optimize relational and non-relational databases. Ensure data integrity, scalability, and high performance for enterprise systems.
            </p>
            <button onClick={handleClickOpenContact} className="app-button yellow-btn">
              {" "}
              View Expertise{" "}
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              
            </button>
          </div>

          {/* AU SHOP Card */}
          <div className="app-card blue">
            <img className="bg" src={bg3} alt="bg" />
            <div className="app-header">
              <img src={logo} alt="logo" className="title-img" />
              <h3 className="app-title"> DevOps Engineer </h3>
            </div>
            <p className="app-description">
            Automation, CI/CD & Infrastructure Mastery
            </p>
            <p className="app-details">
            Learn how to streamline development workflows, automate deployments, manage infrastructure as code, and ensure continuous integration and delivery.
            </p>
            <button onClick={handleClickOpenContact} className="app-button blue-btn">
              {" "}
              Start Learning {" "}
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            </button>
          </div>
         
        </div>
   
      </motion.div>
      <Contact   style={{ zIndex:999  }} open={openContact} onClose={handleCloseContact} />
    </section>
  );
};

export default FeaturedApps;
