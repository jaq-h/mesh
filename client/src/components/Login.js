import React, { Component } from 'react';
//import { authEndpoint, clientId, redirectUri, scopes} from "./config";
class Login extends Component {

  render() {
    let auth_url = 'https://mesh-meida.herokuapp.com/api/auth'
    return (
      <div>
        <header className="App-header">
          <a className="btn btn--loginApp-link"
            href={auth_url} >
            Login with spotify
          </a>
        </header>
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
