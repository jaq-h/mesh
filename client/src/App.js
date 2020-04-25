import React, { Component } from 'react';
import { authEndpoint, clientId, redirectUri} from "./config";
import * as $ from "jquery";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import hash from "./hash";



class App extends Component{
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    window.fetch('/api/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));

      // let _token = hash.access_token;
    }

    getUser(token) {
      // Make a call using the token
      $.ajax({
        url: "https://api.spotify.com/v1/me/",
        type: "GET",
        beforeSend: xhr => {
          xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: data => {
          console.log(data);
        }
      });
    }
  render() {
    return (

      <Router>
          <div className="App">
            <header className="App-header">
              <a
                  className="btn btn--loginApp-link"
                  href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`} >
                  Login to spotify
                </a>
                {hash ?  this.getUser(hash.access_token) : console.log("empty")}
            </header>
          </div>
      </Router>
    );
  }
}

export default App;
