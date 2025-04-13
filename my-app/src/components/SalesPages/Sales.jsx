import React, { useState } from "react";
import "./Sales.css";

function Sales() {
  const contentData = {
    "UI/UX Design": {
      head: "UI/UX DESIGN",
      title: "Design Experiences That Matter",
      description: "Master design principles, wireframing, prototyping, Figma, and usability testing for user-first interfaces.",
      image:"https://prerit.org/wp-content/uploads/2023/11/wp-ui-ux-2.jpg",
    },
    "Web Development": {
      head: "FULL STACK WEB DEV",
      title: "Master the MERN Stack",
      description: "Learn HTML, CSS, JavaScript, React, Node.js, Express & MongoDB to build full-scale applications.",
      image: "https://myelearningworld.com/wp-content/uploads/2023/04/best-online-web-development-courses.png",
    },
    "Data Science": {
      head: "DATA SCIENCE",
      title: "Analyze. Predict. Build Intelligence.",
      description: "Dive into Python, Machine Learning, Data Visualization, Pandas, and real-world datasets.",
      image: "https://d31ezp3r8jwmks.cloudfront.net/grg7tfsiqd93e50jxo3a7r09kstb",
    },
 
  };

  const [activeButton, setActiveButton] = useState("Web Development");

  return (
    <div className="App">
      {/* Button Group */}
      <div className="button-group">
        {Object.keys(contentData).map((button) => (
          <button
            key={button}
            onClick={() => setActiveButton(button)}
            className={activeButton === button ? "active" : ""}
          >
            {button}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="content-container">
        <div className="image">
          <img src={contentData[activeButton].image} style={{borderRadius:"10px"}} alt={activeButton} />
        </div>
        <div className="text">
          <h5>{contentData[activeButton].head}</h5>
          <h2>{contentData[activeButton].title}</h2>
          <p>{contentData[activeButton].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Sales;
