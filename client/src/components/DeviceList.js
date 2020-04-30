import React, { Component } from 'react';
import * as $ from "jquery";

class DeviceList extends Component {
  constructor(props){
    super(props);
    this.state = {
       deviceList:  []
     };



  }

  async componentDidUpdate(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/devices",
            type: "GET",
            beforeSend: (xhr) => {
              xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
            },

            success: (data) => {
              console.log(data.devices);
             this.state.deviceList = data.devices.map((d) => <li key={d.id} >{d.name}</li>);
             console.log(this.state.deviceList);

            }
        });


  }

  render(){
    console.log(this.state.deviceList);
    return (
      <div>
      <ul>
        {this.state.deviceList}
        </ul>
      </div>
    );
  }

}

export default DeviceList;
