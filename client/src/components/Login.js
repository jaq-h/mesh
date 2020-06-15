import React, { Component } from 'react';
//import { authEndpoint, clientId, redirectUri, scopes} from "./config";
class Login extends Component {

  render() {
    const auth_url = 'http://localhost:3001/api/auth'
    const background = 'https://get.pxhere.com/photo/pattern-line-metal-material-circle-sheet-font-background-design-mesh-grid-shape-drawn-regularly-804360.jpg'
    return (
      <div>
        <header className="App-header">
          <a className="btn btn--loginApp-link"
            href={auth_url} >
            Login with spotify
          </a>
        </header>
        <div >
        <h1 style={{'text-align':'center'}}> Welcome to Mesh </h1>
        </div>
      </div>
    );
  }

}

export default Login;




// href={`${authEndpoint}
// ?client_id=${clientId}
// &redirect_uri=${redirectUri}
// &scope=${scopes.join("%20")}
// &response_type=token
// &show_dialog=true`}
