import React,{ Component } from 'react';
import image from '../assets/work.svg';

export class Work extends Component{
    render(){
        return(
            <div className="Work">
                <div className="parallax2">
                    <div className="text-container">
                    <div className="intro">
                        <p className="intro1">MY PROJECTS<p className="create">I Create blah blah blah</p></p>
                        
                        <div  className="intro2"><img className="picture" src={image} alt="imageing"></img></div>
                        </div>
                </div>
                </div>
                <div id="overview">
                    <div className="info"></div>

                </div>
            </div>
        );
    }
}