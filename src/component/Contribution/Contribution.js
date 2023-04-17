import React from "react";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faGitlab} from "@fortawesome/free-brands-svg-icons";
export default function App() {

  return (
    <div className="cont-container">
      <div className="upper-container">
        <div className="upper-spam">
          40+
        </div>
      </div>
      <div className="lower-container-cont">
        <div className="lower-container-left">
          CONTRIBUTIONS IN<br/>
          <span>PROFESSIONAL &</span><br/><span>PERSONAL</span><br/>PROJECTS
        </div>
        <div className="lower-container-right">
          VISIT MY GIT<br/><br/>
          <a className="linkbtn1" href="https://github.com/rishabkhanna27"> <FontAwesomeIcon icon={faGithub } size = '4x' />{' '}</a>
          <a className="linkbtn1" href="https://gitlab.com/rishabkhanna27"> <FontAwesomeIcon icon={faGitlab } size = '4x' />{' '}</a>
        </div>
      </div>
    </div>
  );
}