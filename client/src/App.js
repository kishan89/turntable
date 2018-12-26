import React, { Component } from 'react';
import Axios from 'axios'
import Stories from './Components/Stories.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Turntable from './Components/Turntable.js'
import Story from './Components/Story.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Turntable}/>
          <Route path="/story/:_id" component={Story}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
