import React, { Component } from 'react';
import * as $ from "jquery";

class DeviceList extends Component {
  constructor(props){
    super(props);
    this.state = {
       deviceList:  [],
       playerDevice: null
     };



  }
  handleClick = (e) => {
    console.log(e.target.id);
    this.props.onClick(e.target.id);
  }

  fetchDevices = () =>{
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/devices",
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
        },

        success: (data) => {
        console.log(data);
        let devices = data.devices.map((d) => <li onClick={this.handleClick.bind(this)} id={d.id} key={d.id}>{d.name}</li>);
        // devices.push()
         this.setState({'deviceList': devices});

         console.log(this.state.deviceList);

        }
    });

  }

   componentDidMount(){
     this.fetchDevices();

  }

  render(){
    console.log(this.state.deviceList);
    return (
      <div>

        {this.state.deviceList}

      </div>
    );
  }

}

export default DeviceList;
