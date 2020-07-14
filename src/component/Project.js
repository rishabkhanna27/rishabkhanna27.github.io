import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import image from '../assets/starti.jpg';

export class Project extends Component{
    render(){
        return(
            <div className="projectmain">
            <div className="project"><br></br><br></br>
            <div className="check">HAVE A LOOK AT MY</div>

                <div className=" block">
                <Link to="/Work"><i className=" hovicon effect-4 sub-b">Projects</i></Link>
                </div>
            </div>
            <div className="project1">
            <div className="maincontent">
                My <span2>Project</span2> Work
            </div>
            <div className="secondarycontent">
                Create To Learn blah blah<br></br>
                <img className="pict" src={image} alt="project"/>
            </div>
            </div>
            </div>
        );
    }
}