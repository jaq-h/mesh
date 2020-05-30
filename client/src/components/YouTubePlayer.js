import React, { Component } from 'react';
import {  Icon } from 'semantic-ui-react'
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
    console.log(this.props.search);
    if(this.props.search){
      let embed =  `https://www.youtube.com/embed/?autoplay=1&disablekb=1&fs=0&listType=search&list=${encodeURIComponent(this.props.search)}`
      return(
        <div >
          <iframe id="ytplayer"
            type="text/html"
            src={embed}
            frameBorder="0">
            </iframe>
        </div>
      );
    }
    else{
      return (
        <div>
        </div>
      );

    }
    
  }


}

export default YouTubePlayer;

//return <YouTube videoId="n9nf5ShnRfk" opts={opts} onReady={this._onReady} />;
//let embed =  `https://www.youtube.com/embed/${this.state.videoId}?autoplay=1&origin=http://localhost:3000/home&disablekb=1&fs=0`