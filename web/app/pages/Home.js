import React, {Component} from 'react';
import Login from '../components/Login';

export default class Container extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="home_container">
        <h1>Home Page</h1>
        <Login />
      </div>
    )
  }
}
