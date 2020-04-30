import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 1,
      enablejsapi: 1,
      origin: 'localhost:3000/home'
      //listType: this.props.listType,



    },
  };

    return <YouTube videoId="oWqAf4eex14" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubePlayer;
