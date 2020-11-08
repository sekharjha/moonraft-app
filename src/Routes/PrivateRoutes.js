import React from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'
const PrivateRoutes = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const isLoggedIn = localStorage.getItem("logged")
  console.log(isLoggedIn)
  return (
    <Route {...rest} render={(props) => (
        isLoggedIn === true
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
      )} />
  )
}

export default PrivateRoutes;