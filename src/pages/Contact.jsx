import React from "react";
import { useState } from "react";
import axios from "axios";
import "../css/contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BACKEND from "../../constrants";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    // setFormData({ name: e.name.value });
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const subject = e.target.subject.value;
    try {
      const response = await axios
        .post(`${BACKEND}/contact`, {
          name,
          email,
          message,
          subject,
        })
        .then((res) => {
          console.log(res);
          if (res.data.message === "Data saved successfully")
            navigate("/thanks");
        });

      // setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <div className="contact">
        <h1>Contact</h1>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7168.950635815651!2d87.28193218934267!3d23.227382554976966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f79958448dda77%3A0x29923a824265d061!2sPanchal%2C%20West%20Bengal%20722157!5e1!3m2!1sen!2sin!4v1738986929957!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container-fluid ">
        <div className="container get-in-touch-container">
          <div className="row">
            <div className="col-12 get-in-touch">
              <h2>Get in Touch</h2>
            </div>

            <div className="row">
              <form
                className="col-lg-8 col-12"
                onSubmit={handleSubmit}
                method="post"
              >
                <div className="col-12">
                  <textarea
                    type="text"
                    rows="5"
                    cols="50"
                    contact
                    name="message"
                    id="message"
                    placeholder="Enter Message"
                    className="input"
                    style={{ height: "150px" }}
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="input"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="input"
                    placeholder="Enter subject"
                  />
                </div>
                <button type="submit" className="btn-submit">
                  SEND MESSAGE
                </button>
              </form>
              <div className="col-lg-4 " style={{ padding: "0vh 0vw 0px 5vw" }}>
                <div className="col-12 " style={{ height: "50px" }}>
                  <FaLocationDot className="contact-icon" />{" "}
                  <span className="info"> Bankura, West Bengal, India </span>
                </div>
                <div className="col-12" style={{ height: "50px" }}>
                  <FaPhoneAlt className="contact-icon" />{" "}
                  <span className="info">9064768190</span>
                </div>
                <div className="col-12" style={{ height: "50px" }}>
                  <IoIosMail className="contact-icon" />{" "}
                  <span className="info">tufanm843@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
