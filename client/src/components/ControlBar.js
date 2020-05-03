import React, { Component } from 'react';
import {  Icon } from 'semantic-ui-react'
import DeviceList from './DeviceList.js'

const iconStyles = {
  marginRight: 24,
};

class ControlBar extends Component {
  constructor(props){
    super(props);


  }
  render(){
    return(
      <div  className="Control-Bar">
      <Icon onClick={this.props.actions.shuffle} name='random'/>
       <Icon onClick={this.props.actions.prev} name='step backward'/>
       <Icon onClick={this.props.actions.play} name='play'/>
       <Icon onClick={this.props.actions.skip} name='step forward'/>
       <Icon onClick={this.props.actions.loop} name='sync alternate'/>
       <Icon onClick={this.props.actions.queueMenu} name='list alternate'/>
       <DeviceList token={this.props.token} onClick={this.props.callDevice}/>
      </div>
    );
  }
}

export default ControlBar;
// <Slider min={0} max={1} onChange={this.props.actions.setVolume.bind(this)}/>
