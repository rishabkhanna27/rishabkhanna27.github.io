import React,{Component} from 'react';
import { faFacebook , faLinkedinIn, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { MDBContainer } from 'mdbreact';
import './Footer.css';
import {faHeart, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class Footer extends Component{
    render(){
        return(
      <div>
        <footer className="footer-distributed">
			      <div className="footer-left">
			      	<h3><b>Rishab <span>Khanna</span></b></h3>
				    <div><br></br>
            <p className="call"><FontAwesomeIcon icon={faPhone }/>{' '}+91{' '}9876020239</p>
				    </div>
				    <div>
            <a className="mail" href="mailto:support@company.com"><FontAwesomeIcon icon={faEnvelope }/>{' '}rishabkhanna27@gmail.com</a>
				    </div>
              <br></br>
			      </div>
			      <div className="footer-center">

            <div className="contain icon">
            <ul className="icon list-unstyled list-inline text-center text-dark">
              <li className=" logo list-inline-item ">
                <div><a className="linkbtn" href="https://www.facebook.com/rishabkhanna27">
                <FontAwesomeIcon icon={faFacebook } size = '3x' />{' '}</a>
                </div>
              </li>
              <li className="logo list-inline-item">
                <div><a className="linkbtn" href="https://www.linkedin.com/in/rishabkhanna27/">
                <FontAwesomeIcon icon={faLinkedinIn } size = '3x'/>{' '}</a>
                </div>
              </li>
              <li className="logo list-inline-item">
                <div><a className="linkbtn" href="https://github.com/rishabkhanna27">
                <FontAwesomeIcon icon={faGithub } size = '3x' />{' '}</a>
                </div>
              </li>
              <li className="logo list-inline-item">
                <div><a className="linkbtn" href="https://www.instagram.com/rishabkhanna.27/">
                <FontAwesomeIcon icon={faInstagram } size = '3x' />{' '}</a>
                </div>
              </li>
            </ul>
            </div>
			    </div>
		  </footer>
      <div className="foot footer-copyright text-center py-3">
        <MDBContainer fluid>
          Made With <FontAwesomeIcon className="heart" icon={faHeart }/> By <a href="https://github.com/rishabkhanna27"> Rishab Khanna</a>
        </MDBContainer>
      </div>
    </div>
        );
    }

}