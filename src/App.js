import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Editareas from './pages/Editareas'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/edit/:id" component={Editareas} />
      </Switch>
    );
  }
}

export default App;
