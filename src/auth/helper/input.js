import React from 'react'
import { Component } from 'react';
import axios from 'axios'
class Input extends Component{
    constructor(props){
    super(props);    
  
    this.state ={
        email :'',
        password : '',
        returnSecureToken:true
    }
    this.handleChange = this.handleChange.bind(this);
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit = event =>{
        event.preventDefault();
        const user = {
            email : this.state.email,
            password :this.state.password,
            returnSecureToken:true,
        };
        console.log(JSON.stringify(user))
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc',user)
        .then(res=>{
          console.log(res.data)
          this.props.isLogin = true
        })
    }
    render(){
        return(
        <form onSubmit = {this.handleSubmit}>
            <label>
                email:<input type = "text" name="email" onChange={this.handleChange}/>
            </label>
            <label>
                password:<input type = "text" name="password" onChange={this.handleChange}/>

            </label>
            <button type="submit">Login</button>
        </form>
        )
    }
}
export default Input;