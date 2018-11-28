import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TokenManager from '../utils/token-manager';
import '../styles/login.scss';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin(event) {
    console.log(this.state.password);
    event.preventDefault();
    axios.post('http://mcr-codes-image-sharing-api.herokuapp.com/auth/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log(response);
        TokenManager.setToken(response.data.token);
        this.props.history.push('/feed');
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          errorMessage: 'incorrect password or network error',
        });
      });
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <form className="forms">
          <h1>User Log In</h1>
          <label>Username</label>
          <input type="text" name="email" onChange={this.handleInputChange} />
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleInputChange} />
          <button onClick={this.handleLogin}>Login</button> or <Link to="/sign-up">Sign Up</Link>
        </form>
        <div>
          { <p>{this.state.errorMessage}</p>}
        </div>
      </React.Fragment>
    );
  }
}


// import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import TokenManager from '../utils/token-manager';


// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       errorMessage: '',
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleLogin = this.handleLogin.bind(this);
//   }

//   handleInputChange(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   handleLogin() {
//     axios.post('http://mcr-codes-image-sharing-api.herokuapp.com/auth/login', {
//       email: this.state.email,
//       password: this.state.password,
//     })
//       .then((response) => {
//         console.log(response);

//         TokenManager.setToken(response.data.token);
//         this.props.history.push('/upload');
//       })
//       .catch((error) => {
//         this.setState({ errorMessage: error.response });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <div>
//           <label htmlFor="email">
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label htmlFor="email">
//             Password:
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </div>
//         {
//           this.state.errorMessage &&
//           <div><span>{this.state.errorMessage}</span></div>
//         }
//         <div>
//           <button onClick={this.handleLogin}>Login</button> or <Link to="/sign-up">Sign Up</Link>
//         </div>
//       </div>
//     );
//   }
// }

// Login.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

export default Login;
