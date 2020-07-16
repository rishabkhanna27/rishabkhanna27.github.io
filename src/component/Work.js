import React,{ Component } from 'react';
import image from '../assets/work.svg';
import { Button } from 'react-bootstrap';
import { Footer } from './Footer';

export class Work extends Component{
    render(){
        return(
            <div className="Work">
                <div className="parallax2">
                    <div className="text-container">
                    <div className="intro">
                        <p className="intro1">MY PROJECTS<p className="create">I Create blah blah blah</p></p>
                        
                        <div  className="intro2"><img className="picture" src={image} alt="imageing"></img></div>
                        <div className="car">
                        <div class="projectbutton2"><Button className="btn" variant="info">Game<br></br>Projects</Button></div>
                        <div class="projectbutton1"><Button className="btn" variant="info">Complete<br></br>Projects</Button></div>
                        <div class="projectbutton3"><Button className="btn" variant="info">Base<br></br>Projects</Button></div>
                        </div>
                        </div>
                </div>
                </div>
                <div id="overview">
                    <div className="complete1">
                        <div class="complete2"></div>
                        <div class="complete3"></div>
                        <div class="complete4"></div>
                        <div class="complete5"></div>
                    </div>
                <div className="parallax3"></div>
                    <div className="game1">
                        <div class="game2"></div>
                        <div class="game3"></div>
                        <div class="game4"></div>
                    </div>
                <div className="parallax4"></div>
                    <div className="base1">
                        <div class="base2"></div>
                        <div class="base3"></div>
                        <div class="base4"></div>
                        <div class="base5"></div>
                        <div class="base6"></div>
                    </div>
                <Footer/>
                </div>
            </div>
        );
    }
}