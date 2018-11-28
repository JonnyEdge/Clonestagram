import React from 'react';
import '../styles/app.scss';
import NavBar from './navbar';
import Upload from './upload';
import { Switch, Route } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import SignUp from './signup';
import Login from './login';
import TokenManager from '../utils/token-manager';
import AuthRoute from './auth-route';
import ImagesComponent from './ImagesComponent';

library.add(faCameraRetro);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: TokenManager.isTokenValid() ? TokenManager.getTokenPayload() : null,
    };
  }

  handleLogin = () => {
    this.setState({ user: TokenManager.getTokenPayload });
  };

  handleLogout = () => {
    TokenManager.removeToken();
    this.setState({ user: null });
  };

  isLoggedIn() {
    return Boolean(this.state.user) && TokenManager.isTokenValid();
  }

  render() {
    return (
      <React.Fragment>
        <div className="navigation">
          <NavBar
            isLoggedIn={this.isLoggedIn()}
            user={this.state.user}
            onLogout={this.handleLogout}
          />
          {/* <AuthRoute
            exact
            path="/upload"
            component={Upload}
            authenticate={this.isLoggedIn}
          /> */}
          <Switch>
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/" component={ImagesComponent} /> */}
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
