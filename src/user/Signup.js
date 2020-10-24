import React from "react";
import firebase from "../firebase";
import Img from '../Assets/Images/project-07.jpg'
import {Link} from 'react-router-dom'
import { Form,Container, FormContainer, ImageContainer,Image, Input, ButtonContainer, Button, Heading } from "./styles";
 export default class Login extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               email: '',
               password: '',
               name:'',
               heading:'SingUp',
          }
     }

     signUp = (e) => {
         this.setState({
             heading:'Signup',

         })
          e.preventDefault();
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
               .then((user) => {
                    console.log(user);
               }).catch((error) => {
                    console.log(error);
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
                                <Input type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    onChange={this.handleChange}
                                    value={this.state.name} />

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
                                   <Button><Link style={{textDecoration:"none"}}  to ="/">Login</Link></Button>
                                   <Button onClick={this.signUp}>SignUp</Button>
                              </ButtonContainer>
                         </Form>
                    </FormContainer>
               </Container>
          );
     }


}
