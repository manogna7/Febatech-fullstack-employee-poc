import React, { Component } from "react";
import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./Components/Table";
import {ReactComponent as logo} from "./logo.png";
class App extends Component {
  render() {
  function logo()
  {
  return(
    <div className="App">
    <img src ={require('./logo.png')} alt="logo"/>
    </div>
    );
    }
    return (
      <Router>
        <Route exact path="/" component={AddEmployee} />
        <Route exact path="/view" component={Table} />
      </Router>
    );
  }
}

export default App;
