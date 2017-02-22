import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
// Custom Components
import Container from './components/Container';
import Home from './pages/Home';
import NewUser from './pages/NewUser';

if (typeof window !== 'undefined') {
    window.React = React;
}
class App extends Component {
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Container} >
          <IndexRoute component={Home} />
          <Route path='/user/new' component={NewUser}></Route>
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
