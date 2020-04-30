import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import Headers from "../Headers";
import DeviceList from '../components/DeviceList.js'
import YouTubePlayer from '../components/YouTubePlayer.js'
import Script from 'react-load-script'
import * as $ from "jquery";

class Home extends Component {
  constructor(props){
    super(props);
    //console.log(props);
    // if(this.props.currentUser.access_token === undefined ){
    //   this.props.history.go('http://localhost:3001/api/auth');
    // }
    this.state = {
      currentUser: this.props.currentUser,
      playerState: null,
      video: {
        id: 'oWqAf4eex14',
        type: ''
      }
    }
    console.log(this.state.currentUser);
  //   fetch("http://localhost:3001/api/playing",{
  //     method: "POST",
  //     headers: Headers,
  //     body:  JSON.stringify(this.props.currentUser)
  //   }).then(res => res.json()).then(json => console.log(json));
  //   console.log(JSON.stringify(this.state.currentUser));
  }

  componentDidMount(){
    console.log(this.state.currentUser);
     if(this.state.currentUser === undefined ){
       window.fetch('http://localhost:3001/api/auth');
    }
  }

  handleScriptLoad = () => {
    console.log(this.stae)
  const interval = setInterval(() => {
    if ('Spotify' in window) {
      clearInterval(interval);
      const player = new window.Spotify.Player({
        name: "Sesh",
        getOAuthToken: cb => { cb(this.state.currentUser.access_token); }
      });
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
        //this.props.history.go('http://localhost:3001/api/auth');
      });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });

      // Playback status updates
      player.addListener('player_state_changed', state => {
        this.state.playerState = state;
         console.log(this.state.playerState);
       });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.callDevice(device_id);


      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect();
      console.log(player);


      }
    });
  }

  callNext = () => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/next",
      type: "POST",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.currentUser.access_token);
      },

      success: (data) => {
        console.log(data);
      }
    });
  }

  callDevice = (device_id) => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/",
      type: "PUT",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.currentUser.access_token);
      },
      data: JSON.stringify({device_ids: [device_id]}),
      success: (data) => {
        console.log(data);
      }
    });
  }

  callTogglePlay = () => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/play",
      type: "PUT",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.currentUser.access_token);
      },
      //data: JSON.stringify({device_ids: [device_id]}),
      success: (data) => {
        console.log(data);
      }
    });
  }


  render() {

    return (

      <div>
      <Script
        url="https://sdk.scdn.co/spotify-player.js"
        onError={this.handleScriptError}
        onLoad={this.handleScriptLoad}
      />
 
        <h1> Welcome {this.state.currentUser.display_name}</h1>
        <Button onClick={this.callNext}> <Icon name='arrow right'/></Button>
        <Button onClick={this.callTogglePlay}> <Icon name='play'/></Button>
        <DeviceList token={this.state.currentUser.access_token} onClick={this.callDevice}/>
        <YouTubePlayer vidoeId={this.state.video.id} listType={this.state.video.type}/>
      </div>
    );
  }

}

export default Home;


// getCurrentlyPlaying(token) {
//   // Make a call using the token
//   $.ajax({
//     url: "https://api.spotify.com/v1/me/player",
//     type: "GET",
//     beforeSend: (xhr) => {
//       xhr.setRequestHeader("Authorization", "Bearer " + token);
//     },
//     success: (data) => {
//       this.setState({
//         item: data.item,
//         is_playing: data.is_playing,
//         progress_ms: data.progress_ms,
//       });
//     }
//   });
// }


// resolve = () => {
//   const player = new window.Spotify.Player({
//     name: 'Web Playback SDK Template',
//     getOAuthToken: cb => { cb(this.state.currentUser.access_token); }
//   })
//   player.connect()
// }
  // Error handling
  // player.on('initialization_error', e => console.error(e));
  // player.on('authentication_error', e => console.error(e));
  // player.on('account_error', e => console.error(e));
  // player.on('playback_error', e => console.error(e));
  //
  // // Playback status updates
  // player.on('player_state_changed', state => {
  //   console.log(state)
  //   $('#current-track').attr('src', state.track_window.current_track.album.images[0].url);
  //   $('#current-track-name').text(state.track_window.current_track.name);
  // });
  //
  // // Ready
  // player.on('ready', data => {
  //   console.log('Ready with Device ID', data.device_id);
  //
  //   // Play a track using our new device ID
  //   play(data.device_id);
  // });

  // Connect to the player!
