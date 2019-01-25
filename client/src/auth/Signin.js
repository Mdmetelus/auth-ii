import React, { Component } from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom';
// import './App.css';

class Signin extends Component {
  state = {
		username: '',
    password: '',
    department:'',
  };
  
  handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
  };
  
  handleSubmit = event => {
		event.preventDefault();

		const endpoint = `${process.env.REACT_APP_API_URL}/api/login`;

		axios
			.post(endpoint, this.state)
			.then(res => {
				localStorage.setItem('jwt', res.data.token);
			})
			.catch(err => console.err(err));
  };
  

  componentDidMount() {
    const endpoint = 'http:// localhost:3300/api/users';

    axios.get(endpoint).then(res=> {
        console.log(res.data);

    }).catch(err=> {
        console.error('ERROR', err);
    })
}



  department
  render() {
    return (
      <div className="Login">
      <h2>Login</h2>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlfor='username'>Username</label>
          <input name="username"
            value={this.state.username}
            placeholder="Username"
						onChange={this.handleInputChange}
						type="text"/></div>

        <div>
          <label htmlfor='password'>Password</label>
          <input name="password"
						value={this.state.password}
						onChange={this.handleInputChange}
						type="password"
            placeholder="Password"/></div>

        <div>
          <label htmlfor='department'>Password</label>
          <input name="department"
						value={this.state.department}
						onChange={this.handleInputChange}
						type="password"
            placeholder="Department"/></div>

          <div><button type="submit">Signin</button></div>


          
      </form>
        
      </div>
    );
  };
}

export default Signin;
