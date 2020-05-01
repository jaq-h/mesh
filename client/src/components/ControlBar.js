import React, { Component } from 'react';
import {  Icon } from 'semantic-ui-react'
import Slider from '@material-ui/core/Slider';

const iconStyles = {
  marginRight: 24,
};

class ControlBar extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
       <Icon onClick={this.props.actions.prev} name='angle double left'/>
       <Icon onClick={this.props.actions.play} name='play'/>
       <Icon onClick={this.props.actions.skip} name='angle double right'/>
       <Slider min={0} max={1} onChange={this.props.actions.setVolume.bind(this)}/>
      </div>
    );
  }
}

export default ControlBar;
