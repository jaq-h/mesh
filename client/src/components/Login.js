import React, { Component } from 'react';
//import { authEndpoint, clientId, redirectUri, scopes} from "./config";
class Login extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          <a className="btn btn--loginApp-link"
<<<<<<< HEAD
            // href={`${authEndpoint}
            // ?client_id=${clientId}
            // &redirect_uri=${redirectUri}
            // &scope=${scopes.join("%20")}
            // &response_type=token
            // &show_dialog=true`}
            href="/api/auth"
          >
=======
            href="http://localhost:3001/api/auth" >
>>>>>>> 6a7ee9976f952609849b90c4f6916a927445bdbe
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
