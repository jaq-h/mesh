import React, { Component } from 'react';
import Headers from "../Headers";
import ControlBar from '../components/ControlBar.js'
import DeviceList from '../components/DeviceList.js'
import NowPlaying from '../components/NowPlaying.js'
import YouTubePlayer from '../components/YouTubePlayer.js'
import Script from 'react-load-script'
import * as $ from "jquery";

class Home extends Component {
  constructor(props){
    super(props);
    //console.log(props);
    // if(this.props.currentUser.access_token === undefined ){
    //   this.props.history.go('http://localhost:3001/api/auth');


    this.state = {
      currentUser: this.props.currentUser,
      thisDevice: null,
      playerState: null,
      youtubeSearch: null,
    }

    console.log(this.state.currentUser);

  }

  componentDidUpdate(){
    console.log(this.state.currentUser);

  }

  handleScriptLoad = () => {
    console.log(this.state.currentUser.access_token);
    if(this.state.currentUser.access_token === undefined ){

        window.location = "http://localhost:3001/api/auth"

   }
  const interval = setInterval(() => {
    if ('Spotify' in window) {
      clearInterval(interval);
      const player = new window.Spotify.Player({
        name: "Mesh",
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
           this.setState({
             playerState: state
             // {
             //    'context': state.context,
             //    'paused': state.paused,
             //    'repeat_mode': state.repeat_mode,
             //    'shuffle': state.shuffle,
             //  }

          });
          console.log(state);
       });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.callDevice(device_id);
        this.setState({thisDevice: device_id});


      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
        // player.setVolume(.01).then(()=>{console.log(player.getVolume); });
      player.connect();
      // player.getVolume().then(volume => {
      // let volume_percentage = volume * 100;
      // console.log(`The volume of the player is ${volume_percentage}%`);
        // });
      console.log(player);
      }
    });
  }
  callVolume = (e) =>{
    console.log(e);
    $.ajax({
      url: `https://api.spotify.com/v1/me/player/volume?volume_percent=${e.value}`,
      type: "POST",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.currentUser.access_token);
      }
    });
  }

  callLoop = (e) => {

    $.ajax({
      url: `https://api.spotify.com/v1/me/player/repeat?state=${e.target.id}`,
      type: "PUT",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.currentUser.access_token);
      },
      //data: JSON.stringify({state: state})
      success: () => {
        console.log("success");
      }
    });
  }
  callNext = () => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/next",
      type: "POST",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.currentUser.access_token);
      }
    });
  }
  callPrevious = () => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/previous",
      type: "POST",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.currentUser.access_token);
      }
    });
  }

  callDevice = (device_id) => {
    console.log(device_id);
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

  callMusic = (id) => {
    console.log(id);
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/",
      type: "PUT",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.currentUser.access_token);
      }
      //data: JSON.stringify({device_ids: [device_id]})
      // success: (data) => {
      //   console.log(data);
      // }
    });
  }

  callPlay = () => {
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

  callPause = () => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/pause",
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

  callToggleShuffle = () => {

    let shuffle = !this.state.playerState.shuffle;
    console.log(shuffle);
    $.ajax({
      url: `https://api.spotify.com/v1/me/player/shuffle?state=${shuffle}`,
      type: "PUT",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.currentUser.access_token);
      },

      success: (data) => {
        console.log(data);
      }
    });
  }

  searchVideo = (e) => {
    console.log(e);
    this.setState({youtubeSearch: e});

  }


  render() {
    const controlMethods = {
      'play':this.callPlay,
      'pause':this.callPause,
      'skip':this.callNext,
      'prev':this.callPrevious,
      'setVolume':this.callVolume,
      'shuffle':this.callToggleShuffle,
      'device':this.callDevice,
      'music':this.callMusic,
      'loop':this.callLoop,
    }
    return (

      <div className="Sesh">
      <Script
        url="https://sdk.scdn.co/spotify-player.js"
        onError={this.handleScriptError}
        onLoad={this.handleScriptLoad}
      />
      <ControlBar actions={controlMethods} player={this.state.playerState} user={this.state.currentUser} search={this.searchVideo}  />

        <YouTubePlayer  search={this.state.youtubeSearch}/>
      </div>
    );
  }

}

export default Home;

// <NowPlaying player={this.state.playerState}/>
//

  //<h3> Welcome {this.state.currentUser.display_name}</h3>
// <Button onClick={this.callNext}> <Icon name='arrow right'/></Button>
// <Button onClick={this.callTogglePlay}> <Icon name='play'/></Button>

//   fetch("http://localhost:3001/api/playing",{
//     method: "POST",
//     headers: Headers,
//     body:  JSON.stringify(this.props.currentUser)
//   }).then(res => res.json()).then(json => console.log(json));
//   console.log(JSON.stringify(this.state.currentUser));

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
