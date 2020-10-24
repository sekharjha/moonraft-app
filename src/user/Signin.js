import React from "react";
import firebase from "../firebase";
import Img from '../Assets/Images/project-07.jpg'
import {Link} from 'react-router-dom'
import { Form,Container, FormContainer, ImageContainer,Image, Input, ButtonContainer, Button, Heading  } from "./styles";
 export default class Login extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               email: '',
               password: '',
               heading:'Login',
               message:''
          }
     }
     login = (e) => {
        this.setState({
            heading:'Login',
        })
          e.preventDefault();
          firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
               .then((user) => {
                    console.log(user);
               }).catch((error) => {
                    console.log(error);
                    this.setState({
                         message:'Incorrect UserName or Password'  
                    })
               })
     }


     handleChange = (e) => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }
     render() {
          return (
               <Container>
                   <ImageContainer><Image src={Img}></Image></ImageContainer> 
 
                    <FormContainer>
                         <Heading>{this.state.heading}</Heading>
                         <Form>
                              <Input type="email"
                                   id="email"
                                   name="email"
                                   placeholder="Username"
                                   onChange={this.handleChange}
                                   value={this.state.email} />
                                
                                
                              <Input type="password"
                                   id="password"
                                   name="password"
                                   placeholder="Password"
                                   onChange={this.handleChange}
                                   value={this.state.password} />
                                  

                              <ButtonContainer>
                                   <Button onClick={this.login}>Login</Button>
                                   <Button><Link style={{textDecoration:"none",color:"#438ec4"}} to="/signup">SignUp</Link></Button>
                              </ButtonContainer>
                              <p style={{color:"red"}}>{this.state.message}</p>
                         </Form>
                    </FormContainer>
               </Container>
          );
     }


}
