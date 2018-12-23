import React, { Component } from 'react';
import StoryTile from './StoryTile.js'

class Stories extends Component {
  render() {
    let stories;
    if (this.props.stories) {
      stories = this.props.stories.map(story => {
        return (
          <StoryTile key={story.title} story={story} />
        )
      });
    }
    return (
      <div className="Story-grid">
          {stories}
      </div>
    );
  }
}

export default Stories;
