import React from "react";
import { FaCheck } from "react-icons/fa";
import "../css/thanks.css";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#311E25" }}>
      <div class="container">
        <div class="row thanks">
          <div class="col">
            <FaCheck className="icon" />
          </div>
        </div>
        <div class="row greetings">
          <div class="col">
            <p>Thank you !</p>
          </div>
        </div>
        <div class="row reply">
          <div class="col-12">
            <p>Your message has been received.</p>
          </div>
          <div class="col-12" style={{ paddingBottom: "150px" }}>
            <Link to={"/"}>
              <button className="goBack">Go Back Home</button>
            </Link>
          </div>
        </div>
        {/* <div class="row goBackBtn">
          
        </div> */}
      </div>
    </div>
  );
}

export default Thanks;
