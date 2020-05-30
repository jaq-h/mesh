import React, { Component } from 'react';

class NowPlaying extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: this.props.player
    }

  }

  componentDidMount(){
    console.log(this.state.player);
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}

export default NowPlaying;
