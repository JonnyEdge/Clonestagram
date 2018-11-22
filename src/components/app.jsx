import React from 'react';
import '../styles/app.scss';
import NavBar from './navbar';
import Upload from './upload';
import { Switch, Route } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

library.add(faCameraRetro);

class App extends React.Component {
  render() {
    return (
      <div className="navigation">
        <NavBar />
        <Switch>
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
