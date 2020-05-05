import React, { Component } from 'react';
import {  Icon } from 'semantic-ui-react'
import DeviceList from './DeviceList.js'

const iconStyles = {
  marginRight: 24,
};

class ControlBar extends Component {
  constructor(props){
    super(props);
    console.log(props);

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
    return b;
  }





  render(){
    let buttons = this.setButtons();
    return(
      <div  className="Control-Bar">
        {buttons}
       <DeviceList token={this.props.token} onClick={this.props.callDevice}/>
      </div>
    );
  }
}

export default ControlBar;
// <Slider min={0} max={1} onChange={this.props.actions.setVolume.bind(this)}/>
