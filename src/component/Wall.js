import React, { Component } from 'react';  
import ReactTable from "react-table-6";  
// import "react-table-6/react-table.css"
import "./table.css";  
import schema from '../config/create.json';
import col from '../config/default.json';
import {Button} from 'react-bootstrap';
import { Footer } from './Footer';

export class Wall extends Component {  
  constructor(props) {
    super(props);
    this.state={
      show: false,
      verify: '0'
    }
    this.VTable = this.VTable.bind(this);
    this.HTable = this.HTable.bind(this);
    this.STable = this.STable.bind(this);
    this.DTable = this.DTable.bind(this);
    this.MTable = this.MTable.bind(this);
  }
  VTable(e) {
    this.setState({
      show: true,
      verify: '1'
    });
  }
  HTable(e) {
    this.setState({
      show: false,
      verify: '0'
    });
  }
  STable(e) {
    this.setState({
      show: true,
      verify: '2'
    });
  }
  DTable(e) {
    this.setState({
      show: true,
      verify: '3'

    });
  }
  MTable(e) {
    this.setState({
      show: true,
      verify: '99'

    });
  }
  render() {  
    const data1 = schema.schema.Lost
    const data2 = schema.schema.Got
    const data3 = schema.schema.Bot
     const columns = col 
    return (  
          <div className="btview">  
          <div className="footdown">
            <br></br><br></br><br></br><br></br>
            <Button variant="dark" onClick={this.MTable}>View</Button>{' '}
            <Button variant="warning" onClick={this.HTable}>Hide</Button>{' '}
            {
              this.state.show && this.state.verify==='99' &&
            <div>
            <Button variant="dark" onClick={this.VTable}>View</Button>{' '}
            <Button variant="dark" onClick={this.STable}>Show</Button>{' '}
            <Button variant="dark" onClick={this.DTable}>Dont</Button>
            </div>
          }
            {
              this.state.show && this.state.verify==='1' &&
              <ReactTable  
                  data={data1}  
                  columns={columns}  
                  defaultPageSize = {18}    
              />  
            }
             {
              this.state.show && this.state.verify==='2' &&
              <ReactTable  
                  data={data2}  
                  columns={columns}  
                  defaultPageSize = {18}    
              />  
            }
             {
              this.state.show && this.state.verify==='3' &&
              <ReactTable  
                  data={data3}  
                  columns={columns}  
                  defaultPageSize = {18}    
              />  
            }
		      </div>
          <Footer/>
          </div>        
    )  
  }  
}  
