import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends Component {
  constructor(props){
    super(props);

  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
  render() {
    const opts = {
    //height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 1,
      enablejsapi: 1,
      origin: 'localhost:3000/home',
      loop: 1
      //listType: this.props.listType,



    },
  };

    return <YouTube videoId="oWqAf4eex14" opts={opts} onReady={this._onReady} />;
  }


}

export default YouTubePlayer;
