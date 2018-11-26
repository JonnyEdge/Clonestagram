import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleLogin() {
    axios.post('http://mcr-codes-image-sharing-api.herokuapp.com/users', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    })
      .then(() => {
        this.props.history.push('/feed');
      });
  }

  render() {
    return (
      <form className="forms">
        <h1>Sign Up</h1>
        <label htmlFor="firstName">
            First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="lastName">
            Last Name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="email">
            Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="email">
            Password:
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <div>
          <button onClick={this.handleLogin}>Sign Up</button>or <Link to="/login">Log in</Link>
        </div>

      </form>
    );
  }
}

export default SignUp;
