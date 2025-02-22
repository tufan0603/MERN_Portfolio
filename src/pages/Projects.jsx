import React, { useEffect, useState } from "react";
import axios from "axios";
import BACKEND from "../../constrants";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND}/project`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-3" key={project._id}>
              <div className="banner">
                <img src={project.banner} alt="banner" />
              </div>
              <Link>
                <h5>{project.title}</h5>
              </Link>
              <p>{project.smallDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
