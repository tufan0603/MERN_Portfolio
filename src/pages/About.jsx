import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../css/about.css";
import { Link } from "react-router-dom";
import BACKEND from "../../constrants";

const ProgressBar = ({ percentage, label }) => {
  return (
    <div className="progress-bar-container" style={{ paddingTop: "20px" }}>
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

function About() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND}/skill`) // Replace with your API URL
      .then((res) => {
        setSkills(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });
  }, []);

  return (
    <div className="about">
      <div className="container-fluid about-container-fluid">
        <div class="container ">
          <div class="row">
            <div class="col-12 about-name">
              <h1 style={{ paddingTop: "5vh", marginBottom: "-10px" }}>Hi! </h1>{" "}
              <h1>
                I am <span style={{ color: "#DB9A64" }}>Tufan Mandal</span>
              </h1>
              <h3 style={{ color: "#DB9A64", marginBottom: "5vh" }}>
                FULL STACK DEVELOPER
              </h3>
              <Link to={"/resume"}>
                <button className="cv">Download CV</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid " style={{ backgroundColor: "#311E25" }}>
        <div className="container pt-4" style={{}}>
          <div className="row ">
            <div className="col-md-6 education-col p-3">
              <h2 style={{ textDecoration: "underline", textAlign: "center" }}>
                Education
              </h2>
              <div className="row " style={{ paddingTop: "15px" }}>
                <div className="col-8">
                  <h5>Master of Technology (Data Science)</h5>

                  {/* <p>CGPA. : NA </p> */}
                </div>
                <div className="col-4" style={{ textAlign: "center" }}>
                  <i>2024 ~ Present</i>
                </div>
                <div className="col-12">
                  <p>
                    Maulana Abul Kalam Azad University of Technology, West
                    Bengal <br />
                    CGPA. : NA
                  </p>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "15px" }}>
                <div className="col-8">
                  <h5>
                    Bachelor of Technology (Computer Science & Engineering)
                  </h5>
                </div>
                <div className="col-4" style={{ textAlign: "center" }}>
                  <p>2020 ~ 2024</p>
                </div>
                <div className="col-12">
                  <p>
                    University of Engineering and Management, Jaipur <br />
                    CGPA. : 7.81
                  </p>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "15px" }}>
                <div className="col-8">
                  <h5>Higher Secondary</h5>
                </div>
                <div className="col-4" style={{ textAlign: "center" }}>
                  2018-2020
                </div>
                <div className="col-12">
                  <p>
                    West Bengal Council of Higher Secondary Education (WBCHSE){" "}
                    <br /> Panchal High School (H.S) <br />
                    Marks: 85%
                  </p>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "15px" }}>
                <div className="col-8">
                  <h5>Secondary</h5>
                </div>
                <div className="col-4" style={{ textAlign: "center" }}>
                  2016-2018
                </div>
                <div className="col-12">
                  <p>
                    West Bengal Board of Secondary Education (WBBSE) <br />{" "}
                    Panchal High School (H.S) <br />
                    Marks: 86.14%
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3" style={{ textAlign: "justify" }}>
              <div className="col-12">
                <h2 className="about-me">About Me</h2>
              </div>
              <p>
                &#128640; I do things like building websites and making them
                look nice. This is where you can see the cool projects I've
                worked on. I like to solve problems and make things that people
                enjoy using. <br />
                <br />
                &#128161; I'm all about being creative and trying new things.
                Whether it's making websites that are easy to use or figuring
                out tricky problems, I love what I do. Each project here is like
                a little story of how I made something awesome. <br />
                <br />
                &#127760; Take a look around, and you'll find some projects I've
                done. Each project has its own story, and I'm excited to share
                them with you. <br />
                <br />
                &#x1F4C8; If you want to chat or work on something together,
                feel free to reach out. Thanks for stopping by, and I hope you
                enjoy checking out my digital creations!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ backgroundColor: "#311E25", paddingBottom: "50px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="languages">Different Languages I Know</h2>
              <div className="row">
                <div className="col-lg-4" style={{ paddingBottom: "40px " }}>
                  <h3 style={{ textAlign: "center", fontSize: "2em" }}>
                    বাংলা
                  </h3>
                  <ProgressBar percentage={100} label="Read" />
                  <ProgressBar percentage={100} label="Write" />
                  <ProgressBar percentage={100} label="Speak" />
                </div>
                <div className="col-lg-4" style={{ paddingBottom: "40px" }}>
                  <h3 style={{ textAlign: "center", fontSize: "2rem" }}>
                    English
                  </h3>
                  <ProgressBar percentage={90} label="Read" />
                  <ProgressBar percentage={95} label="Write" />
                  <ProgressBar percentage={80} label="Speak" />
                </div>
                <div className="col-lg-4" tyle={{ paddingBottom: "40px" }}>
                  <h3 style={{ textAlign: "center", fontSize: "2rem" }}>
                    हिन्दी
                  </h3>
                  <ProgressBar percentage={50} label="Read" />
                  <ProgressBar percentage={30} label="Write" />
                  <ProgressBar percentage={70} label="Speak" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container all-skill-con">
          <div className="row">
            <div className="col-12">
              <h3 className="allSkill">Professional Skillset</h3>
            </div>
            {skills.map((skill) => (
              <div className="col-12">
                <ProgressBar
                  percentage={skill.strength}
                  label={skill.skillName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
