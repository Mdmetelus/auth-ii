
import React from "react";

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      password2: "",
      department: "",
      error: ""
    };
  }

  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };

  registerUser = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      department: this.state.department
    };


    if (
      this.state.password.length > 10 &&
      this.state.password === this.state.password2
    ) {
      alert("hello");
    } else {
      return this.setState({ error: "Enter a valid username/password" });
    }
  };
  render() {
    return (
      <div className="container">
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.registerUser}>
          <label for="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.changeHandler}
            required
          />
          <label for="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.changeHandler}
            required
          />
          <label for="password2">Re-type Password:</label>
          <input
            type="text"
            name="password2"
            id="password2"
            value={this.state.password2}
            onChange={this.changeHandler}
            required
          />
          <label for="department">Department:</label>
          <input
            type="text"
            name="department"
            id="department"
            value={this.state.department}
            onChange={this.changeHandler}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Signup;