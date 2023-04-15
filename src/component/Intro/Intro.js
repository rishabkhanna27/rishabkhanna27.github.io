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
                        Voluptates modi dignissimos
                        quibusdam, veritatis iste adipisci recusandae accusamus repellendus beatae laudantium, minus
                        saepe. Dicta omnis similique incidunt corporis ipsa veniam cumque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus, tempore reprehenderit
                        vero quis distinctio aut, ex debitis accusamus maiores inventore obcaecati facilis blanditiis,
                        sapiente ullam cumque possimus consequatur autem!
                    </div>
                    </div>
                </div>
                
                
            </div>
        );
    }
}