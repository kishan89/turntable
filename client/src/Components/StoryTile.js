import React, { Component } from 'react';

class StoryTile extends Component {
  selectStoryTile(_id) {
    console.log('selected', _id);
  }

  render() {
    let story = this.props.story
    return (
      <div className="Story-tile-container">
        <div className="Story-tile" onClick={this.selectStoryTile.bind(this, story._id)}>
          <strong> {story.title} </strong>
          <br/>
          <i> {story.author} </i>
        </div>
      </div>
    );
  }
}

export default StoryTile;
