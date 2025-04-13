import React from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <p className="feature-subtitle">JUnlock Your coding potential with our online courses</p>
        <h2 className="feature-title">
        Affordable and Quality Education
        </h2>
        <p className="feature-description">
        Our goal is to provide the affordable and quality eduction in the world.We are providing the platform for the aspiring techers and students to share their skils, creativity and knowlwdge to each other to empower and contribute in the growth and wellness of makind <br />
          Welcome to <strong>AURUMM</strong>.
        </p>
      </div>
      <div className="feature-image">
        <img src={"https://lms-coursify.vercel.app/assets/aboutMainImage-c2377b54.png"} alt="Software Suite Preview" />
      </div>
    </section>
  );
};

export default FeatureSection;
