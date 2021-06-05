import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { NavBar } from './component/NavBar';
import { About } from './component/About';
import { Work } from './component/Work';
import { Sign } from './component/Sign';
import { Well } from './component/Well';
import { Wall } from './component/Wall';
import meta from './config/create.json';


export default class App extends React.Component {
render(){
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
       <NavBar/>
       <Switch>
       <Route path='/' component={About} exact/>
       <Route path='/Work' component={Work} />
       <Route path={`/todo/${meta.meta.key[0].chained}`} component={Well} />
       <Route path={`/wall/${meta.meta.key[0].chain}`} component={Wall} />
       <Route path='/sign' component={Sign}/>
       </Switch>
      </header>
    </BrowserRouter>
    </div>
  );
}
}
