import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faLanguage,
  faFlask,
  faChartLine,
  faPaintBrush,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import animate from "../../asserts/featureanimated.16110a81.svg";

import "./Partner.css";
import { motion } from "framer-motion";

function Partner() {
  // Sidebar items for learning courses
  const courseItems = [
    { id: 1, icon: faLaptopCode, text: "Web Development" },
    { id: 2, icon: faLanguage, text: "Language Learning" },
    { id: 3, icon: faFlask, text: "Science & Experiments" },
    { id: 4, icon: faChartLine, text: "Business & Marketing" },
    { id: 5, icon: faPaintBrush, text: "Design & Creativity" },
    { id: 6, icon: faUsers, text: "Soft Skills & Leadership" },
  ];

  return (
    <div className="partner">
      <div className="head-partner">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            ease: "easeInOut",
          }}
        >
          <div>
            <h5>COURSES</h5>
            <h2 className="partner-title">
              Explore. Learn. Grow:
              <br />
              Your Journey Starts Here!
            </h2>
          </div>
        </motion.div>

        <div>
          <img src={animate} alt="animation" className="animate" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.4,
          ease: "easeInOut",
        }}
      >
        <section className="partner-section">
          <div className="sidebar-partner">
            {courseItems.map((item) => (
              <div key={item.id} className="sidebar-item">
                <FontAwesomeIcon icon={item.icon} className="icon" />
                <span className="text">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="partner-image">
            <img src={"https://tse2.mm.bing.net/th?id=OIP.83e78DihJzbRLO8iwm7j5QHaFQ&pid=Api"} alt="Learning Course Preview" />
            <p className="partner-text">
              Unlock your potential with interactive, expert-led online courses
              tailored to your goals.
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default Partner;
