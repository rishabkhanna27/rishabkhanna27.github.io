import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Style.css"
import frontend from "../../assets/frontend.svg";
import backend from "../../assets/backend.svg";
import database from "../../assets/database.svg";
import softwares from "../../assets/softwares.svg";

const App = () => {
  return (
    <Carousel className='skill-container'>
        <Carousel.Item>
        <div  className="intro2"><img className="picture" src={frontend} alt="imageing"></img></div>
          <div>
            UI TECHNOLOGIES
          </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>  
        <Carousel.Item>
        <div  className="intro2"><img className="picture" src={backend} alt="imageing"></img></div>
          <div>
            UI TECHNOLOGIES
          </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>  
        <Carousel.Item>
        <div  className="intro2"><img className="picture" src={database} alt="imageing"></img></div>
          <div>
            UI TECHNOLOGIES
          </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>   
        
        <Carousel.Item>
        <div  className="intro2"><img className="picture" src={softwares } alt="imageing"></img></div>
          <div>
            UI TECHNOLOGIES
          </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>    
    </Carousel>
  );
};

export default App;
