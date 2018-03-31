import React from 'react';
import Test from './components/test.jsx'; 
import './App.css'
import Shorten from './components/Shorten.jsx'
import Header from './components/Header.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Test />
        <br />
        <Shorten />
      </div>
    );
  }
}

export default App;
