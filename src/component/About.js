import React, { Component } from 'react';
import {faLongArrowAltDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skills } from './Skills';
import { Project } from './Project';
import { Contact } from './Contact';
import { Footer } from './Footer';
import image1 from '../assets/me.jpg';
import image from '../assets/capture.svg';

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
                <div id="start" className="start">
                <div className="about"><span>ABOUT </span>ME</div>
                    <div className="right-box">
                    <img className="pic1" src={image1} alt="me"/>
                    </div>

                    <div className="left-box">
                    <div className="aboutinfo">
                        Voluptates modi dignissimos
                        quibusdam, veritatis iste adipisci recusandae accusamus repellendus beatae laudantium, minus
                        saepe. Dicta omnis similique incidunt corporis ipsa veniam cumque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus, tempore reprehenderit
                        vero quis distinctio aut, ex debitis accusamus maiores inventore obcaecati facilis blanditiis,
                        sapiente ullam cumque possimus consequatur autem!
                    </div>
                    </div>
                </div>
                <Skills/>
                
                <Project/>
                <div className="parallax1"></div>
                <Contact/>
                <Footer/>
                
            </div>
            </div>
        );
    }
}