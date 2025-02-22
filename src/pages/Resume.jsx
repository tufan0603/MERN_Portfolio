import React from "react";
import resume from "../assets/Tufan_Mandal.pdf";
import "../css/resume.css";

function Resume() {
  return (
    <div className="resume-div">
      <iframe
        className="resume"
        src={resume}
        height={"450px"}
        width={"100%"}
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default Resume;
