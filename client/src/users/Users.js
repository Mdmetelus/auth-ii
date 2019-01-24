import React, { Component } from 'react';
import axios from 'axios';
// import { list } from 'postcss';
// import ReactDOM from 'react-dom';
// import './App.css';

class Users extends Component {
    state ={
        users: []
    }


    async componentDidMount() {
        const endpoint = `${process.env.REACT_APP_API_URL}/api/users`;

        console.log('endpoint', endpoint);
        
        try {
            const token = localStorage.getitem('jwt');
            const requestOptions = {
                headers: {
                    authorization: token,
                },
            };
            const response = await axios.get(endpoint, requestOptions);
            this.setState({ users: response.data.users });


        } catch (error) {
            console.error('we ran into an issue getting the users');
        }
  
        // axios.get(endpoint).then(res=> {
        //     console.log(res.data);
  
        // }).catch(err=> {
        //     console.error('ERROR', err);
        // })
    }


  render() {
    return (
      <div className="usersList">
      <h2>List of Users</h2>
      <ul>
          {this.state.map(u => (
              <li key={u.id}>{u.name}</li>
          ))}
      </ul>
        
      </div>
    );
  }
}

export default Users;
