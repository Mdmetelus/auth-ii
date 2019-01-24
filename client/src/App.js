import React, { Component } from 'react';
import { NavLink, Route }from 'react-router-dom';

import Users from './users/Users.js';
import Signin from './auth/Signin.js';
// import Signup from './auth/Signup.js';
// import './App.css';

const Home = props => {
  return(
    <div>
      <h1>Home Component</h1>
    </div>
  )
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/Signin">Signin</NavLink>
            {/* <NavLink to="/Signup">Signup</NavLink> */}

          </nav>
          <main>
            <Route path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/Signin" component={Signin} />
            {/* <Route path="/Signup" component={Signup} /> */}
          </main>
        </header>


      </div>
    );
  }
}

export default App;
