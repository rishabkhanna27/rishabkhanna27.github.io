import React,{ Component } from 'react';
import image from '../assets/work.svg';
import { Button } from 'react-bootstrap';
import { Footer } from './Footer';
import { Work2 } from './Work2';

export class Work extends Component{
    render(){
        return(
            <div className="Work">
                <div className="parallax2">
                    <div className="text-container">
                    <div className="intro">
                        <div className="intro1">MY PROJECTS<p className="create">I Create blah blah blah</p></div>
                        
                        <div  className="intro2"><img className="picture" src={image} alt="imageing"></img></div>
                        <div className="car">
                        <div className="projectbutton2"><Button href="#head2" className="btnn" variant="info">Game<br></br>Projects</Button></div>
                        <div className="projectbutton1"><Button href="#head1" className="btnn" variant="info">Complete<br></br>Projects</Button></div>
                        <div className="projectbutton3"><Button href="#head3" className="btnn" variant="info">Base<br></br>Projects</Button></div>
                        </div>
                        </div>
                </div>
                </div>
                <div id="overview">
                <Work2/>
                <Footer/>
                </div>
            </div>
        );
    }
}