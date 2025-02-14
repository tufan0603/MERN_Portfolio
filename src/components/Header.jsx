import { Link, Outlet } from "react-router-dom";
import "../css/header.css";
import Tufan_Mandal_RESUME from "../assets/Tufan_Mandal_RESUME.pdf";
import React from "react";
import { useState, useEffect } from "react";
import { FaGripLines } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";

function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementsByClassName("sidebar")[0];
    if (element) {
      element.style.display = sidebarVisible ? "inline" : "none";
    }
  }, [sidebarVisible]);

  return (
    <>
      <header className="container-fluid p-3 ">
        <div className="container header">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 ">
              <span className="name fs-2">
                <Link to={"/"} className="name fs-2">
                  TUFAN.
                </Link>
              </span>
            </div>

            <div className="col-lg-5 ">
              <div className="row ">
                <div className="col-sm">
                  <Link to={"/"} className="links">
                    Home
                  </Link>
                </div>
                <div className="col-sm">
                  <Link to={"/about"} className="links">
                    About
                  </Link>
                </div>
                <div className="col-sm">
                  <Link to={"/projects"} className="links">
                    Projects
                  </Link>
                </div>
                <div className="col-sm">
                  <Link to={"/resume"} className="links">
                    Resume
                  </Link>
                </div>
                <div className="col-sm">
                  <Link to={"/linkedin"} className="links">
                    LinkedIn
                  </Link>
                </div>
                <div className="col-sm">
                  <Link to={"/contact"} className="links">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 text-end ">
              <Link to={"/contact"}>
                <button className="talk"> Let’s Talk</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="sidebar-element">
        {" "}
        <FaGripLines
          className=" three-dots"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        />
      </div>

      <div className="sidebar">
        <div className=" ">
          <div className="sidebar-element">
            <RxCross1
              style={{ textAlign: "left !importent" }}
              className="cross"
              onClick={() => setSidebarVisible(!sidebarVisible)}
            />
          </div>

          <div className="sidebar-element">
            <Link
              to={"/"}
              className="sidebar-links"
              onClick={() => setSidebarVisible(false)}
            >
              Home
            </Link>
          </div>
          <div className="sidebar-element">
            <Link
              to={"/about"}
              className="sidebar-links"
              onClick={() => setSidebarVisible(false)}
            >
              About
            </Link>
          </div>
          <div className="sidebar-element">
            <Link
              to={"/projects"}
              className="sidebar-links"
              onClick={() => setSidebarVisible(false)}
            >
              Projects
            </Link>
          </div>
          <div className="sidebar-element">
            <Link
              to={"/resume"}
              className="sidebar-links"
              onClick={() => setSidebarVisible(false)}
            >
              Resume
            </Link>
          </div>
          <div className="sidebar-element">
            <Link
              to={"/linkedin"}
              className="sidebar-links"
              onClick={() => setSidebarVisible(false)}
            >
              LinkedIn
            </Link>
          </div>
          <div className="sidebar-element">
            <Link
              to={"/contact"}
              className="sidebar-links"
              onClick={() => setSidebarVisible(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* <header>
        <div class="header-area ">
          <div id="sticky-header" class="main-header-area">
            <div class="container-fluid ">
              <div class="header_bottom_border">
                <div class="row align-items-center">
                  <div class="col-xl-3 col-lg-2">
                    <div class="logo">
                      <a href="index.html">
                        <img src="img/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-7">
                    <div class="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a href="index.html">home</a>
                          </li>
                          <li>
                            <a href="Works.html">Works</a>
                          </li>
                          <li>
                            <a href="Services.html">Services</a>
                          </li>
                          <li>
                            <a href="#">
                              pages <i class="ti-angle-down"></i>
                            </a>
                            <ul class="submenu">
                              <li>
                                <a href="works_details.html">work details</a>
                              </li>
                              <li>
                                <a href="elements.html">elements</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about.html">about</a>
                          </li>
                          <li>
                            <a href="#">
                              blog <i class="ti-angle-down"></i>
                            </a>
                            <ul class="submenu">
                              <li>
                                <a href="blog.html">blog</a>
                              </li>
                              <li>
                                <a href="single-blog.html">single-blog</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div class="Appointment">
                      <div class="book_btn d-none d-lg-block">
                        <a href="#">Let’s Talk</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* <nav>
        <div class="container">
          <div class="row navbar">
            <div class="col-md-auto">
              <Link to="/" className="hyp-links">
                <span>TM</span>
              </Link>
            </div>
            <div class="col-md-6">
              <div class="row links">
                <div class="col-md-2 ">
                  <Link
                    to="/"
                    // style={{ textDecoration: "none", color: "#fff" }}
                    className="hyp-links"
                  >
                    <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                  </Link>
                </div>
                <div class="col-md-2 ">
                  <Link to="/about" className="hyp-links">
                    About
                  </Link>
                </div>
                <div class="col-md-2 ">
                  <Link to="/projects" className="hyp-links">
                    <i class="fa-solid fa-display"></i>Projects
                  </Link>
                </div>
                <div class="col-md-2 ">
                  <Link
                    to={Tufan_Mandal_RESUME}
                    target="_blank"
                    className="hyp-links"
                  >
                    <i class="fa-solid fa-clipboard-list"></i>Resume
                  </Link>
                </div>
                <div class="col-md-2">
                  <Link
                    to="https://www.linkedin.com/in/tufan-mandal/"
                    className="hyp-links"
                  >
                    <i class="fa-brands fa-linkedin"></i>LinkedIn
                  </Link>
                </div>
                <div class="col-md-2">
                  <Link to="/contact" className="hyp-links">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet></Outlet> */}
    </>
  );
}

export default Header;
