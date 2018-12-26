import React, { Component } from 'react';
import Axios from 'axios'
import '../App.css';

class Story extends Component {
  constructor() {
    super();
    this.state = {
      story: Object
    };
  }
  componentDidMount() {
    this.getStory();
  }
  getStory() {
    Axios.get('http://localhost:3001/story/' + this.props.match.params._id)
    .then(response => {
      let story = response.data;
      this.setState({
        story: story
      })
    })
  }

  render() {
    let story = this.state.story;
    return (
      <div className="Story">
        <h2> {story.title} </h2>
        <p> {story.body} </p>
      </div>
    );
  }
}

export default Story;
