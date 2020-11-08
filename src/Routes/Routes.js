import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../core/Home";
import Contact from "../core/Contact"
import View from '../core/View'
import SignIn from '../user/Signin'
import SignUp from '../user/Signup'
import firebase from "../firebase";
import Data from "../test/data"
import PrivateRoute from "./PrivateRoutes"
class Routes extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.authListener();
  }

  //..it set states of the component on user login state changed
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("logged",true)
      }
      else {
        this.setState({ user: null })
        localStorage.setItem("logged",false)
      }
    })
  }
  render(){
  return (
    <BrowserRouter>
        <Switch>
         <PrivateRoute component={Home} path="/home" exact />
         <PrivateRoute component={Contact} path="/Contact" exact />
         <PrivateRoute component={View} path="/View" exact />
         <Route path="/signup" component = {SignUp}/>
         <Route exact path = "/" component={SignIn}/>
         </Switch>
     </BrowserRouter>
  )
};
}

export default Routes;
