import React,{Component} from 'react';
import {ContactForm} from './ContactForm';
import '../App.css';

export class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <div className="thirdone">
                      <div className="leftbox3">
                        Always
                        Open
                        for<br></br>
                        <span7>New </span7>
                        And <br></br>
                        <span8> Intresting </span8> <br></br>
                        Ideas. 
                       </div>
                       <div className="rightbox3">
                       <ContactForm/>
                    </div>
                    </div>
            </div>
        );
    }
}