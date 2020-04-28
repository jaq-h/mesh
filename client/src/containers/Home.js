import React, { Component } from 'react';
import Headers from "../Headers";
import Script from 'react-load-script'
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      playing: {}
    }
  //   fetch("http://localhost:3001/api/playing",{
  //     method: "POST",
  //     headers: Headers,
  //     body:  JSON.stringify(this.props.currentUser)
  //   }).then(res => res.json()).then(json => console.log(json));
  //   console.log(JSON.stringify(this.state.currentUser));
  }
  handleScriptLoad = () => {
  const interval = setInterval(() => {
    if ('Spotify' in window) {
      clearInterval(interval);
      const player = new window.Spotify.Player({
        name: "Sesh",
        getOAuthToken: cb => { cb(this.state.currentUser.access_token); }
      });
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });

      // Playback status updates
      player.addListener('player_state_changed', state => { console.log(state,player); });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
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


  resolve = () => {
    const player = new window.Spotify.Player({
      name: 'Web Playback SDK Template',
      getOAuthToken: cb => { cb(this.state.currentUser.access_token); }
    })
    player.connect()
  }
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




  render() {

    return (

      <div>
      <Script
        url="https://sdk.scdn.co/spotify-player.js"
        onError={this.handleScriptError}
        onLoad={this.handleScriptLoad}
      />

        <h1> Welcome {this.state.currentUser.display_name}</h1>
      </div>
    );
  }

}

export default Home;
