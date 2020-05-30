import React, { Component } from 'react';
import * as $ from "jquery";

class DeviceList extends Component {
  constructor(props){
    super(props);
    this.state = {
       deviceList:  [],

     };



  }
  handleClick = (e) => {
    console.log(e.target.id);
    this.props.deviceClick(e.target.id);
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
        let devices = data.devices.map((d) => <li className="device" onClick={this.handleClick.bind(this)} id={d.id} key={d.id}>{d.name}</li>);

         this.setState({'deviceList': devices});

         console.log(this.state.deviceList);

        }
    });

  }

   componentDidUpdate(){
     if(this.props.show){
     this.fetchDevices();
   }
  }

  render(){
    const style = !this.props.show ? {display: 'none', backgroundColor: 'blue'} : {display: 'inline',  backgroundColor: 'blue'};
    console.log(this.state.deviceList);
    return (
      <div style={style}>

        {this.state.deviceList}

      </div>
    );
  }

}

export default DeviceList;
