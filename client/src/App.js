import React, { Component } from 'react';
import Axios from 'axios'
import Stories from './Components/Stories.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }
  componentDidMount() {
    this.getStories();
  }

  getStories() {
    Axios.get('http://localhost:3001/')
    .then(response => {
      let stories = response.data;
      this.setState({
        stories: stories
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Stories-title"> Stories </div>
        <div className="Story-container">
          <Stories stories={this.state.stories} />
        </div>
      </div>
    );
  }
}

export default App;
