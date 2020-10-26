
import React, { Component } from 'react'
import Input from "../auth/helper/input"
import ViewPage from "../component/View/view"
import Base from './Base'
class View extends Component{
  render(){

    return (
      <Base title="Contact Page">
         <ViewPage/>
         </Base>
    );
  }
}
export default View;