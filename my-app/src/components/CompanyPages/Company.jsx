import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Company.css";
import { motion } from "framer-motion";
import logo1 from "../../asserts/Aurum_Logo.38df8d15.png";


const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000, // Speed for continuous sliding
    slidesToShow: 5, // Number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Ensures smooth movement
    cssEase: "linear",
    arrows: false,
    ltr:true, // Reverse direction if state is "right"
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "70px 20px" }}>
      
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4, // Optional delay for staggered effect
            ease: "easeInOut",
          }}
        >
          <h5 className="heading">OUR COURSES</h5>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4, // Optional delay for staggered effect
            ease: "easeInOut",
          }}
        >
          <h1 className="heading">Empower Your Future with Coding Skills</h1>
        </motion.div>
      <Slider {...settings} className="company-slider">
        <div className="company">
          <div className="cards">
            <img src={logo1} alt="Logo1" className="carousel-image" />
          </div>
        </div>
        <div className="company">
          <div className="cards">
            <img src={"https://lms-coursify.vercel.app/assets/aboutMainImage-c2377b54.png"} alt="Logo2" className="carousel-image" />
          </div>
        </div>
        <div className="company">
          <div className="cards">
            <img src={"https://learnhub-opju.vercel.app/images/TimelineImage-65823934.png"} alt="Logo3" className="carousel-image" />
          </div>
        </div>
        <div className="company">
          <div className="cards">
            <img src={logo1} alt="Logo1" className="carousel-image" />
          </div>
        </div>
        <div className="company">
          <div className="cards">
            <img src={"https://lms-coursify.vercel.app/assets/homePageMainImage-9522d71c.png"} alt="Logo5" className="carousel-image" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
