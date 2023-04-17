import React, { Component } from 'react';
import profile from '../../assets/me.jpg';

export class Intro extends Component{
    render(){
        return(
                <div id="overview">
                <div id="start" className="start">
                <div className="about"><span>ABOUT </span>ME</div>
                    <div className="right-box">
                    <img className="pic1" src={profile} alt="me"/>
                    </div>

                    <div className="left-box">
                    <div className="aboutinfo">
                        Welcome to my developer portfolio! With years of experience in programming and technology, 
                        I'm a dedicated and passionate developer specializing in creating high-quality software 
                        solutions for various industries. I have expertise in various programming languages and technologies, 
                        and I'm always striving to stay up-to-date with the latest trends and innovations. 
                        My goal is to create innovative, efficient solutions that meet the unique needs of each client.
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}