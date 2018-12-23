import React, { Component } from 'react';

class StoryTile extends Component {
  render() {
    let story = this.props.story
    return (
      <div className="Story-tile">
        {story.title} - {story.author}
      </div>
    );
  }
}

export default StoryTile;
