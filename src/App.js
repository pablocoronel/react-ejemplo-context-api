import React, { Component } from 'react';

import Greeting from './Greeting';
import ToggleLocale from './ToggleLocale';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting />
        <ToggleLocale />
      </div>
    );
  }
}

export default App;