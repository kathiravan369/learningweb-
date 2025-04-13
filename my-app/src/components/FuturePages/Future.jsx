import React from "react";
import "./Future.css";
import Icon1 from "../../asserts/icon-1.svg"; // Replace with the actual images
import Icon2 from "../../asserts/icon-2.svg";
import Icon3 from "../../asserts/icon-3.svg";
import Icon4 from "../../asserts/icon-4.svg";
import { motion } from "framer-motion";
function Future() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.4, // Optional delay for staggered effect
          ease: "easeInOut",
        }}
      >
        <div className="header">
          <h3>EMPOWER YOUR FUTURE</h3>
          <h1>Master Coding Skills for a Bright Tech Career</h1>
        </div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.4, // Optional delay for staggered effect
          ease: "easeInOut",
        }}
      >
        <div className="card-container">
          <div className="card">
            <img src={Icon1} alt="All-Round Assistance" />
            <h2>Full Stack Development</h2>
            <p>
            Learn to build complete web applications from scratch using MERN stack – HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.
            </p>
          </div>
          <div className="card">
            <img src={Icon2} alt="Relationship Management" />
            <h2>Data Structures & Algorithms</h2>
            <p>
            Master problem-solving techniques and algorithm design to crack coding interviews and write efficient, scalable code.
            </p>
          </div>
          <div className="card">
            <img src={Icon3} alt="Technical Support" />
            <h2>Real-time Projects</h2>
            <p>
            Work on live industry-based projects to gain hands-on experience with version control, deployment, APIs, and team collaboration.
            </p>
          </div>
          <div className="card">
            <img src={Icon4} alt="Stay Ahead" />
            <h2>Career Guidance</h2>
            <p>
            Get personalized mentorship, resume reviews, and job interview prep from experienced developers to launch your tech career. </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Future;
