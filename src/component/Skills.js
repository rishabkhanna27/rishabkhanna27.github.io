import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class Skills extends Component{
    render(){
        return(
            <div className="skills">
            <div className="expertice">MY<span> DEXTERITY</span></div>

                <div className="aligning">
                <div className="leftbox">
                  
                    <header className="title">UI <span>TECHNOLOGIES</span></header><br></br>
                    
                      <Button className="lang">HTML</Button>{' '}
                      <Button className="lang">CSS</Button>{' '}
                      <Button className="lang">BOOTSRAP</Button>{' '}
                      <Button className="lang">JQUERY</Button>{' '}
                      <Button className="lang">REACT JS</Button>
                    
                
                </div>
                <div className="rightbox">

                    <header className="title">SC<span>RIPTING</span></header><br></br>

                      <Button className="lang">JAVA</Button>{' '}
                      <Button className="lang">JAVASCRIPT</Button>{' '}
                      <Button className="lang">PHP</Button>

                </div>
                </div>
                <div className="aligning">
                <div className="leftbox">
               
                    <header className="title">DA<span>TABASE</span></header><br></br>
                  
                      <Button className="lang">My SQL</Button>{' '}
                      <Button className="lang">Oracle</Button>{' '}
                      <Button className="lang">Postgress</Button>
                </div>
                <div className="rightbox">

                    <header className="title">CO<span>NCEPTS</span></header><br></br>

                      <Button className="lang">DATABASE MANAGEMENT</Button>{' '}
                      <Button className="lang">OPERATING SYSTEM</Button>{' '}
                      <Button className="lang">DATA STRUCTERS</Button>

                </div>
                </div>
            </div>
        );
    }
}