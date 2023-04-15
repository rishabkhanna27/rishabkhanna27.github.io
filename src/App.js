import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { About } from './component/About/About';


export default class App extends React.Component {
render(){
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
       <Switch>
       <Route path='/' component={About} exact/>
       </Switch>
      </header>
    </BrowserRouter>
    </div>
  );
}
}
