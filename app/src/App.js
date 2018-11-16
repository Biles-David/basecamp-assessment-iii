import React, { Component } from 'react';
import './App.css';
import Pictures from './Components/Pictures.js'
import Because from './Components/Because.js'
import Name from './Components/Name.js'

class App extends Component {
  render() {
    return (
      <div>
        <Name/>
        <Pictures/>
        <Because/>
      </div>
    );
  }
}

export default App;
