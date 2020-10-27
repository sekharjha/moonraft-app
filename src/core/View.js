
import React, { Component } from 'react'
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