import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import useAuth from '../contexts/auth';

const mapUserIDToGroup = user => ({
    id: user.id,
    email: user.email,
    phone: user.phone,
  });
  
  export default function UserID() {
    // eslint-disable-next-line no-unused-vars
    const { user } = useAuth();
    const userAPI = 'https://gathering.azurewebsites.net/api/Group';
    // eslint-disable-next-line no-unused-vars
    const [User, getUser] = useState([]);
  
    useEffect(() => {
      console.log('Run me once when the component loads');
  
      async function fetchUserID() {

        let response = await fetch(userAPI);
        let tasks = await response.json();
        console.log(tasks);
        // eslint-disable-next-line no-undef
        setUsers(User.map(mapUserIDToGroup));
      }
      fetchUserID();
  
      // "Dispose" action
      return () => {
        console.log('Run me when component goes away')
      }
    }, );
  



// eslint-disable-next-line no-unused-vars
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            UserID:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Phone:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
              Email: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <Button type="submit" value="Submit" pill />
        </form>
      );
    }
    }
  }