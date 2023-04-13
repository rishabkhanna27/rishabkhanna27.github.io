import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../App.css'
export class NavBar extends Component{
    render(){
        return(
            
            <div>                
            <Navbar expand="md" fixed="top" className="navi">
            <Navbar.Brand className="naviii brand text-dark">RK
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className="navii let d-inline p-4 text-dark" to="/">About</NavLink>
//             <NavLink className="navii let d-inline p-4 text-dark" to="/Work">Work</NavLink>
            </Nav>   
            </Navbar.Collapse>
            </Navbar>
            </div>
           
        )
    }
}
export default NavBar;
