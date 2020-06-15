import React, { Component } from 'react';
import * as $ from "jquery";

class MusicList extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //    musicList:  [],
    //
    //  };



  }
  // handleClick = (e) => {
  //   console.log(e.target.id);
  //   this.props.musicClick(e.target.id);
  // }
  //
  // fetchPlaylists = () =>{
  //   $.ajax({
  //       url: `https://api.spotify.com/v1/me/playlists`,
  //       type: "GET",
  //       beforeSend: (xhr) => {
  //         xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
  //       },
  //
  //       success: (data) => {
  //       console.log(data);
  //       let playlists = data.items.map((p) => <li onClick={this.handleClick.bind(this)} id={p.id} key={p.id}>{p.name}</li>);
  //
  //        this.setState({'musicList': playlists});
  //
  //        //console.log(this.state.deviceList);
  //
  //       }
  //   });
  //
  // }
  //
  //  componentDidMount(){
  //    // if(this.props.show){
  //    this.fetchPlaylists();
  //  // }
  // }

  render(){
    const style = !this.props.show ? {display: 'none'} : {display: 'inline'};
    //console.log(this.state.musicList);
    return (
      <div className="List" style={style}>



      </div>
    );
  }

}

export default MusicList;
//
