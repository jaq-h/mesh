import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoId: 'q2fIWB8o-bs'
    }

  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
  render() {
    let embed =  `https://www.youtube.com/embed/${this.state.videoId}?autoplay=1&origin=http://localhost:3000/home&disablekb=1&fs=0`
    //return <YouTube videoId="n9nf5ShnRfk" opts={opts} onReady={this._onReady} />;
    return(
    <div >
      <iframe id="ytplayer"
        type="text/html"


        src={embed}
        frameBorder="0">
        </iframe>
    </div>);
  }


}

export default YouTubePlayer;
