import React from 'react';
import Button from 'react-bootstrap/Button';



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