import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let isLogin = localStorage.getItem("logged")
  if(isLogin.localeCompare('true')==0)
    isLogin = true
  else
    isLogin = false  
  console.log(typeof(isLogin))
  return (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => {
      if (isLogin) {
        return (<Component {...props} />);
      }
      else {
        console.log(isLogin)
        return (
          <Redirect to="/" />)
      }
    }} />
  );
};

export default PrivateRoute;