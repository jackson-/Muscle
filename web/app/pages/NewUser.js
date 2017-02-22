import React, {Component} from 'react';
import {Link} from 'react-router';

class NewUser extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form ref={input => this.login_form = input} className="login_form" onSubmit={(e)=>this.signupHandler(e)}>
        <feildset>
        <legend><h2>Create Account</h2></legend>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input ref={input => this.email = input} type="text" name="email" placeholder="E-mail" required/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input ref={input => this.password = input} type="password" name="password" placeholder="Password" required/>
          </div>
          <div>
            <button type="submit">Sign up!</button>
          </div>
        </feildset>
        Have an account? <Link to="/">Log in!</Link>
      </form>
    );
  }
}

export default NewUser;