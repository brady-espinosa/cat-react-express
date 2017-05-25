import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CatAdd from './components/CatAdd.js'
import CatIndex from './components/CatIndex.js'


class App extends Component {
  render() {
    return(
      <div>
        <div className="App-header">
          <h2>Cat Tinder, Where the Cats go</h2>
        </div>
        <Router>
          <div>
            <Route exact path="/" component={CatIndex}/>
            <Route exact path="/add" component={CatAdd}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
