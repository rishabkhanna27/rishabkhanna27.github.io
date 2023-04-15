import React, { Component } from 'react';
import {faLongArrowAltDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skills  from '../Skills/Skills';
import Experience from '../Experience/Experience';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';
import { Intro } from '../Intro/Intro';
import { Contribution } from '../Contribution/Contribution'
import image from '../../assets/capture.svg';

export class About extends Component{
    render(){
        return(
            <div>
                <div className="parallax">
                    <div className="text-container">
                    <div className="intro">
                        <div className="intro1">Rishab Khanna<p className="create">I Create Some Awesome Projects</p></div>
                        
                        <div  className="intro2"><img className="picture" src={image} alt="imageing"></img></div>
                        </div>
                <div className="arrow bounce">
                <a href="#start"><FontAwesomeIcon icon={faLongArrowAltDown } className="arow" size = '5x'/></a>
                </div>
                </div>
                </div>
                <div id="overview">
                <Intro/>
                <Experience/>
                <Skills/>
                <div className="parallax1"></div>
                <Contribution/>
                <Contact/>
                <Footer/>
                
            </div>
            </div>
        );
    }
}