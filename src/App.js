import React, { Component } from "react";
import Navbar from './Components/Navbar';
import {Route,Switch} from 'react-router-dom';
import Home from './Components/Home';
import Contact from "./Components/Contact";
import Aboutus from './Components/Aboutus';
import SinglePost from './Components/SinglePost'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar></Navbar>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={Aboutus}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/:post_id" component={SinglePost}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
