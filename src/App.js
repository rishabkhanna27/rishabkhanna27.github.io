import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { NavBar } from './component/NavBar';
import { About } from './component/About';
import { Work } from './component/Work';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
       <NavBar/>
       <Switch>
       <Route path='/' component={About} exact/>
       <Route path='/Work' component={Work} />

       </Switch>
      </header>
    </BrowserRouter>
    </div>
  );
}

export default App;