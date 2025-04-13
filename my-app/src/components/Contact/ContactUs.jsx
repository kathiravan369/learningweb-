import React, { useState } from "react";
import "./contact.css";
import axios from "axios";

const API_URL = "http://localhost:8000/api/data";

const ContactUs = ({ open, onClose }) => {
  const [message, setMessage] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("info");

  const [postMethod, setPostMethod] = useState({
    name: "",
    email: "",
    address: "",
    education: "",
  });
  const handleSubmit = async () => {
    if (!postMethod.name.trim()) {
      setMessage("Name is required");
      setSnackbarType("error");
      setShowSnackbar(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(postMethod.email)) {
      setMessage("Invalid email address");
      setSnackbarType("error");
      setShowSnackbar(true);
      return;
    }

    const payload = {
      name: postMethod.name.trim(),
      email: postMethod.email.trim(),
      address: postMethod.address.trim(),
      education: postMethod.education.trim(),
    };

    try {
      const response = await axios.post(API_URL, payload);
      setMessage("Form submitted successfully");
      setSnackbarType("success");
      setShowSnackbar(true);

      setPostMethod({
        name: "",
        email: "",
        address: "",
        education: "",
      });

      console.log("Data added successfully", response);
    } catch (error) {
      const errorMsg =
        error.response?.data?.error || "Error submitting the form";
      if (errorMsg === "Email already entered") {
        alert("This email has already been used.");
      }

      setMessage(errorMsg);
      setSnackbarType("error");
      setShowSnackbar(true);
      console.log("Error in POST method:", error);
    }
  };

  const closeSnackbar = () => setShowSnackbar(false);

  if (!open) return null;

  return (
    <div style={{ zIndex: 999 }} className="dialog-overlay">
      <div style={{ zIndex: 999 }} className="dialog-box">
        <div className="wrapper">
          <div className="gradient-overlay"></div>
          <div className="text-overlay">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <div className="header-text">
              <p className="heading" style={{ color: "white" }}>
                Join the millions learning to code with StudyNotion for free
              </p>
              <p className="desc" style={{ color: "white" }}>
                Build skills for today, tomorrow, and beyond.{" "}
                <span style={{ color: "#4DABCD" }}>
                  {" "}
                  Education to future-proof your career
                </span>
              </p>
            </div>

            <div className="toggle-container">
              <div
                className={`toggle-option ${
                  postMethod.education === "Student" ? "active" : ""
                }`}
                onClick={() =>
                  setPostMethod({ ...postMethod, education: "Student" })
                }
              >
                Student
              </div>
              <div
                className={`toggle-option ${
                  postMethod.education === "Instructor" ? "active" : ""
                }`}
                onClick={() =>
                  setPostMethod({ ...postMethod, education: "Instructor" })
                }
              >
                Instructor
              </div>
            </div>
            <br/>
            <input
              className="custom-input"
              placeholder="Enter name"
              value={postMethod.name}
              onChange={(e) =>
                setPostMethod({ ...postMethod, name: e.target.value })
              }
            />

            <input
              className="custom-input"
              placeholder="Email address"
              type="email"
              value={postMethod.email}
              onChange={(e) =>
                setPostMethod({ ...postMethod, email: e.target.value })
              }
            />

            <input
              className="custom-input"
              placeholder="Location"
              value={postMethod.address}
              onChange={(e) =>
                setPostMethod({ ...postMethod, address: e.target.value })
              }
            />

   

            <div className="submit-row">
              <button
                className="submit-button"
                style={{ backgroundColor: "#F1E0C5", color: "#7C472C" }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSnackbar && (
        <div style={{ zIndex: 1000 }} className={`snackbar ${snackbarType}`}>
          <span>{message}</span>
          <button onClick={closeSnackbar}>&times;</button>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
