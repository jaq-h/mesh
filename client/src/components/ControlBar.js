import React, { Component } from 'react';
import {  Icon } from 'semantic-ui-react'
import DeviceList from './DeviceList.js'


class ControlBar extends Component {
  constructor(props){
    super(props);
    // console.log(props);
    this.state = {
      showDevices: false,
      showMusic: false,
    };
    this.toggleDevices = this.toggleDevices.bind(this);
  }

  // toggleMusic = () => {
  //   this.setState(prevState =>({'showDevices': !this.prevState.showDevices}));
  // }

  toggleDevices(){
    this.setState(state => ({
      showDevices: !state.showDevices
    }));
  }

  setButtons(){
    console.log(this.props)
    let b = [];
    if(this.props.player)
    {
      this.props.player.shuffle ?
        b.push( <Icon onClick={this.props.actions.shuffle} name='random'/>)
      : b.push( <Icon onClick={this.props.actions.shuffle} name='arrows alternate horizontal'/>)

      b.push( <Icon onClick={this.props.actions.prev} name='step backward'/> )

      this.props.player.paused ?
        b.push( <Icon onClick={this.props.actions.play} name='play circle outline'/>)
      : b.push( <Icon onClick={this.props.actions.pause} name='pause circle outline'/>)

      b.push( <Icon onClick={this.props.actions.skip} name='step forward'/> )

      // switch(this.state.playerState.repeat_mode) {
      //   case 0:
      //       b.push( <Icon onClick={this.props.actions.loop} name='sync alternate'/>)
      //       break;
      //   case 1:
      //       b.push( <Icon onClick={this.props.actions.loop} name='sync alternate'/>)
      //     break;
      //   default:
      //
      //   }
    }
    else{

      b.push( <Icon onClick={this.props.actions.prev} name='step backward'/> )
      b.push( <Icon onClick={this.props.actions.play} name='play'/>)
      b.push( <Icon onClick={this.props.actions.pause} name='pause'/>)
      b.push( <Icon onClick={this.props.actions.skip} name='step forward'/> )

    }
    return b;
  }





  render(){
    let controlButtons = this.setButtons();
    return(
      <div  className="Control-Bar">
        <Icon onClick={this.toggleMusic} name='music'/>

        {controlButtons}
        <Icon onClick={this.toggleDevices} name='headphones'/>
        <DeviceList show={this.state.showDevices} token={this.props.token} deviceClick={this.props.actions.device} />
      </div>
    );
  }
}

export default ControlBar;

//  <MusicList show={this.state.showDevices} token={this.props.token} deviceClick={this.props.actions.device} />
// <Slider min={0} max={1} onChange={this.props.actions.setVolume.bind(this)}/>
