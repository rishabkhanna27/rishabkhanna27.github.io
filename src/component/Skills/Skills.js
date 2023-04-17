import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Style.css"
import frontend from "../../assets/frontend.svg";
import backend from "../../assets/backend.svg";
import database from "../../assets/database.svg";
import softwares from "../../assets/softwares.svg";

const App = () => {
  return (
    <div className='skill-container'>
      <div className='skill-intro'>TECHNO STACK</div>
    <Carousel>
        <Carousel.Item>
        <div className='slide-heading' id='UI'>
            <span>UI</span> TECHNOLOGIES
          </div>
        <div className="slide-intro"><img className="picture" src={frontend} alt="imageing"></img></div>
        <div className='slide-intro-right text-capitalize mt-5'>
          <span className='badge badge-pill badge-success'>HTML</span>
          <span className='badge badge-pill badge-success ml-3 mr-3'>CSS</span>
          <span className='badge badge-pill badge-success mr-3'>BOOTSTRAP 4</span><br/><br/>
          <span className='badge badge-pill badge-success mr-3'>JAVASCRIPT</span>
          <span className='badge badge-pill badge-success mr-3'>REACT JS</span>
        </div>
        </Carousel.Item>  
        <Carousel.Item>
        <div className='slide-heading' id='BT'>
            <span>BACKEND</span> TECHNOLOGIES
          </div>
        <div  className="slide-intro"><img className="picture" src={backend} alt="imageing"></img></div>
        <div className='slide-intro-right text-capitalize mt-5'>
          <span className='badge badge-pill badge-success'>NODE JS</span>
          <span className='badge badge-pill badge-success ml-3 mr-3'>EXPRESS</span>
          <span className='badge badge-pill badge-success mr-3'>JAVA</span>
        </div>
        </Carousel.Item>  
        <Carousel.Item>
          <div className='slide-heading' id='DB'>
            <span>DATABASE</span> TECHNOLOGIES
          </div>
        <div  className="slide-intro"><img className="picture" src={database} alt="imageing"></img></div>
        <div className='slide-intro-right text-capitalize mt-5'>
          <span className='badge badge-pill badge-success'>MONGO</span>
          <span className='badge badge-pill badge-success ml-3 mr-3'>MYSQL</span>
          <span className='badge badge-pill badge-success mr-3'>FIREBASE</span><br/><br/>
          <span className='badge badge-pill badge-success mr-3'>ORACLE</span>
        </div>
        </Carousel.Item>   
        
        <Carousel.Item>
        <div className='slide-heading' id='AD'>
          <span>ADDITIONAL</span> TECHNOLOGIES
          </div>
        <div  className="slide-intro"><img className="picture" src={softwares } alt="imageing"></img></div>
        <div className='slide-intro-right text-capitalize mt-5'>
          <span className='badge badge-pill badge-success'>AWS</span>
          <span className='badge badge-pill badge-success ml-3 mr-3'>GCP</span>
          <span className='badge badge-pill badge-success mr-3'>DOCKER</span><br/><br/>
          <span className='badge badge-pill badge-success mr-3'>IOT</span>
          <span className='badge badge-pill badge-success mr-3'>GIT</span>
        </div>
        </Carousel.Item>    
    </Carousel>
    </div>
  );
};

export default App;
