import React, { Component } from 'react';

class Home extends Component {


  render() {
    return (
      <div>
        <h1> Welcome {this.props.currentUser.display_name}</h1>
      </div>
    );
  }

}

export default Home;
