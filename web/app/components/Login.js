import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class Login extends Component{
  constructor(props){
    super(props);

    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler(e){
    e.preventDefault();
    console.log("logging in...");
    console.log("e-mail: ", this.email.value ? this.email.value : "None");
    console.log("password: ", this.password.value ? this.password.value : "None");
  }

  render(){
    return(
      <form ref={input => this.login_form = input} className="login_form" onSubmit={(e)=>this.loginHandler(e)}>
        <feildset>
        <legend><h2>Log In</h2></legend>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input ref={input => this.email = input} type="text" name="email" placeholder="E-mail"/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input ref={input => this.password = input} type="password" name="password" placeholder="Password"/>
          </div>
          <div>
            <button type="submit">Log in</button>
          </div>
        </feildset>
        Not a user? <Link to="/user/new">Sign up!</Link>
      </form>
    );
  }
}

export default Login;