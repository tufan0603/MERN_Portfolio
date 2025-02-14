import "../css/home.css";
import developer from "../assets/devloper.png";
import tufan from "../assets/tufan.png";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const ProgressBar = ({ percentage, label }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-label">
        {label} <span className="percentage">{percentage} %</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

function Home() {
  const [text] = useTypewriter({
    words: ["Software Engineer", "MERN Stack Developer", "Data Analyst"],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 100,
  });
  return (
    <>
      <div className="home">
        <div className="container-fluid home-intro">
          <div className="container">
            <div className="row" style={{ paddingBottom: "100px" }}>
              <div className="col-lg-8">
                <p className="name">
                  Hi there,<span>I am Tufan</span>
                  <br />
                  <span className="animation">
                    {" "}
                    {text}
                    <Cursor className="cursor" aria-hidden="true" />
                  </span>{" "}
                </p>

                <Link to={"/projects"}>
                  <button className="view-works">View Works</button>
                </Link>
              </div>
              <div className="col-lg-4">
                <img src={tufan} alt="tufan pic" className="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-lg-7 intro">
              <h2>LET ME INTRODUCE MYSELF</h2>
              <br />

              <p>
                🚀 I am a programmer by heart and CODER by profession. <br />{" "}
                (C-Confident, O-Opportunistic, D-Developer, E-Enthusiastic,
                D-Developer, R-Regular) <br />
                🚀 I am fluent in{" "}
                <span style={{ color: "#DB9A64" }}>
                  JAVA, HTML, CSS, Bootstrap, Javascript, MongoDB, Node.JS,
                  React, Express.js and Python.{" "}
                </span>
                <br />
                🚀 My field of Interest's are building new{" "}
                <span style={{ color: "#DB9A64" }}>
                  Web Technologies & Applications
                </span>{" "}
                and also in areas related to{" "}
                <span style={{ color: "#DB9A64" }}>
                  Machine Learning , Data Structures and Algorithms.
                </span>
                <br />
                🚀 Whenever possible, I also apply my passion for developing
                products with Modern Javascript Library and CSS Frameworks like{" "}
                Bootstrap and several others.
              </p>
              <br />
              <Link to={"/resume"}>
                <button className="cv">Download CV</button>
              </Link>
            </div>
            <div className="col-lg-5 " style={{ margin: "60px 0px" }}>
              <ProgressBar percentage={80} label="MERN Stack" />
              <ProgressBar percentage={70} label="Java" />
              <ProgressBar percentage={65} label="Python" />
              <ProgressBar
                percentage={60}
                label="Machine Learning"
              ></ProgressBar>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="home">
    //   <div className="container pt-5">
    //     <div className="row py-5">
    //       <div className="col-md-5 profile-pic">
    //         <img src={tufan} alt="Tufan's image" className="image" />
    //       </div>

    //       <div className="col-md-7 intro">
    //         <p>Hi There! 👋🏻</p>
    //         <p>
    //           I'M <span>TUFAN MANDAL</span>
    //         </p>
    //         <i>
    //           <span id="element"></span>
    //         </i>
    //       <h1>
    //         LET ME <span>INTRODUCE</span> MYSELF
    //       </h1>
    //       <br />
    //       <br />
    //       <br />
    //       <p>I am a programmer by heart and CODER by profession.</p>
    //       <p>
    //         ( C-Confident, O-Opportunistic, D-Developer, E-Enthusiastic,
    //         D-Developer, R-Regular )
    //       </p>
    //       <br />
    //       <p>
    //         I am fluent in{" "}
    //         <span>JAVA, C, HTML, CSS, Bootstrap, Javascript and Python.</span>
    //       </p>
    //       <br />
    //       <p>
    //         My field of Interest's are building new{" "}
    //         <span>Web Technologies & Applications</span> and also in
    //       </p>
    //       <p>
    //         areas related to{" "}
    //         <span>Machine Learning , Data Structures and Algorithms.</span>
    //       </p>
    //       <br />
    //       <p>
    //         Whenever possible, I also apply my passion for developing products
    //         with <span>Modern</span>
    //       </p>
    //       <p>
    //         <span>Javascript Library and CSS Frameworks</span> like{" "}
    //         <span>Bootstrap and several others.</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>

    //   {/* <!----------------Find me on------------> */}
    //   <div className="find-me">
    //     <h1>FIND ME ON</h1>
    //     <p>
    //       Feel free to <span>connect</span> with me
    //     </p>
    //     <a href="https://github.com/tufan0603">
    //       <i className="fa-brands fa-github"></i>
    //     </a>
    //     <a href="https://www.linkedin.com/in/tufan-mandal/">
    //       <i className="fa-brands fa-linkedin"></i>
    //     </a>
    //     <a href="https://www.instagram.com/tufanm2021/">
    //       <i className="fa-brands fa-instagram"></i>
    //     </a>
    //     <a href="https://www.facebook.com/tufan.mandal.7330763/">
    //       <i className="fa-brands fa-facebook"></i>
    //     </a>
    //   </div>
    // </div>
  );
}

export default Home;
