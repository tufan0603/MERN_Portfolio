import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#3B2930" }}>
      <div class="container footer">
        <div className="row ">
          <div className="col  ">
            <h1 className="find-me">FIND ME ON</h1>
            <p className="find-me">Feel free to connect with me</p>
          </div>
        </div>
      </div>
      <div className="container hyper-icon">
        <div className="row gx-3">
          <div className="col">
            <a href="https://github.com/tufan0603">
              {" "}
              <FaGithub className="icons" />
            </a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/in/tufan-mandal/">
              {" "}
              <FaLinkedin className="icons" />
            </a>
          </div>
          <div className="col">
            <a href="https://www.instagram.com/tufanm2021/">
              {" "}
              <FaInstagramSquare className="icons" />
            </a>
          </div>
          <div className="col">
            <a href="https://www.facebook.com/tufan.mandal.7330763/">
              {" "}
              <FaFacebook className="icons" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col copyright-col">
            <p className="copyright">
              Copyright ©2025 All rights reserved | This template is made with
              ❤️ by Tufan Mandal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* <div class="row">
          <div class="col-md-4 design">
            Designed and Developed by Tufan Mandal
          </div>
          <div class="col-md-4 copyright">
            Copyright <i class="fa-regular fa-copyright"></i> 2024 TM
          </div>
          <div class="col-md-4 footer-icon">
            <a href="https://github.com/tufan0603">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/tufan-mandal/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/tufanm2021/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/tufan.mandal.7330763/">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div> */
  }
}

export default Footer;
