import React, { Component } from 'react';
//import * as $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
Link,
} from 'react-router-dom'
import './App.css';
import Redirect from './Redirect';
import Auth from './Auth.js'
import Login from './components/Login.js'
import Home from './containers/Home.js'


class App extends Component{
  constructor() {
    super();
    this.state = {
      currentUser:{}
    }
  }


    getUser = (code)  => {
      Auth.login(code)
      .then(res=> {
        const currentUser = res
        //console.log(res);
        this.setState({currentUser}, this.props.history.push('/home'))
      });
    }

  render() {
    return (
          <div className="App">
          <Login currentUser={this.state.currentUser}/>
          <Route exact path="/redirect" component={() => (<Redirect handleCode={this.getUser}/> )} />
          <Route exact path="/home" component={() => (  <Home currentUser={this.state.currentUser}/> )}  />
          </div>

        );
  }
}

export default withRouter(App);
