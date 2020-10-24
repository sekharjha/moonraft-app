import React, { Component} from 'react'
import axios from 'axios'
export default class login extends Component {
    constructor(props){
        super(props);    
      
        this.state ={
            email :'',
            password : '',
            returnSecureToken:true,
            loginSuccess:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
             this.props.isLogin(true)
              
            }).catch(err=>{
                this.setState.loginSuccess = 'Unsuccessfull'
                console.log( this.setState.loginSuccess)
                console.log(err)
            })
        }
        render(){
            return(<div>
            <form onSubmit = {this.handleSubmit}>
                <label>
                    email:<input type = "text" name="email" onChange={this.handleChange}/>
                </label>
                <label>
                    password:<input type = "text" name="password" onChange={this.handleChange}/>
    
                </label>
                <button type="submit">Login</button>
            </form>
            <h1>{this.state.loginSuccess}</h1>
            </div>
            )
        }
    }

