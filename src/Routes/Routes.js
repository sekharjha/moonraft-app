import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../core/Home";
import Contact from "../core/Contact"
import View from '../core/View'
import SignIn from '../user/Signin'
import SignUp from '../user/Signup'
import firebase from "../firebase";
import Data from "../test/data"
import PrivateRoutes from "./PrivateRoutes"
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
      }
      else {
        this.setState({ user: null })
      }
    })
  }
  render(){
     if (this.state.user) {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component = {Home} />
        <Route path="/Contact" component = {Contact} />
        <Route path="/View" component = {View}/>
        <Route path="/signup" component = {SignUp}/>
        <Route path="/data" component = {Data}/>
      </Switch>
    </BrowserRouter>
  );
     }
     else{
       return(
         <BrowserRouter>
          <Switch>
            <Route exact path="/" component = {SignIn}/>
            <Route path="/signup" component = {SignUp}/>
          </Switch>
          </BrowserRouter>
      ); 
     }
  // return (
  //   <BrowserRouter>
  //        <PrivateRoutes  path="/home" component = {Home} />
  //        <PrivateRoutes path="/Contact" component = {Contact} />
  //        <PrivateRoutes path="/View" component = {View}/>
  //        <Route path="/signup" component = {SignUp}/>
  //        <Route exact path = "/" component={SignIn}/>
  //    </BrowserRouter>
  // )
       
};
}

export default Routes;
