import React, { Component } from "react";
import bcrypt from 'bcryptjs';
import meta from '../config/create.json';
import { Footer } from './Footer';

export class Sign extends Component {
    constructor(props) {
        super(props);
        this.nameEl = React.createRef();
        this.passwordEl = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const code = this.passwordEl.current.value;
        const hash = meta.meta.hash[0].hash;
        const hash1 = meta.meta.hash[0].hash1;
        bcrypt.compare(code, hash).then((res) => {

        });

        if(this.nameEl.current.value === meta.meta.dash[0].dash)
        {
            bcrypt.compare(code, hash).then((res) => {
                if(res)
                this.props.history.push(`/todo/${meta.meta.key[0].chained}`);
                else
                alert("You are not autherised to go further")
            });
        }
        else if(this.nameEl.current.value === meta.meta.dash[0].dash1)
        {
            bcrypt.compare(code, hash1).then((res) => {
                if(res)
            this.props.history.push(`/wall/${meta.meta.key[0].chain}`);
            else
            alert("You are not autherised to go further")
            });
        }
        else{
            alert("You are not autherised to go further")
        }
      }
    render(){

        return (
            <div>
        <div className="outer"> 
         <div className="inner"> 
            <form onSubmit={this.handleSubmit}>
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" ref={this.nameEl}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref={this.passwordEl} />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Log in</button>
            </form>
            </div> 
        </div>
        <Footer/> 
        </div>
        );
    }
}