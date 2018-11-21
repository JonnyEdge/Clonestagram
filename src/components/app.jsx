import React from 'react';
import '../styles/app.scss';
import NavBar from './navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

library.add(faCameraRetro)

class App extends React.Component {
  render() {
    return (
      <div className="navigation">
        <NavBar />
      </div>
    );
  }
}

export default App;
