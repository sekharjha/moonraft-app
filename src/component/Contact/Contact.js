import React from 'react'
import * as styles from './styles'
import ContactDetails from './contactDetails'
import {faPhoneAlt, faFax, faGlobe, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import firebase from '../../firebase'
import { ThemeContext } from "../../Theme";

class Contact extends React.Component{
    state = {
        success:false
    }
    static contextType = ThemeContext;

    data = {

    }
    render(){
        const { darkColor } = this.context;
        return(
            <div>
                <styles.location>
                    <styles.map></styles.map>
                    <styles.office_background>
                        <styles.our_office>Our Office</styles.our_office>
                        <styles.office_address>
                            <styles.addr>45 Park Avenue, Apt.303</styles.addr>
                            <styles.addr>NewYork, NY, 10016</styles.addr>
                            <styles.addr>Phone: (123)123-456</styles.addr>
                    
                        </styles.office_address>
                    </styles.office_background>
                </styles.location>
    
                <styles.contact_us>
                    <styles.find_us>
                        <styles.heading>Find Us There</styles.heading>
                        <styles.text>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</styles.text>
                        <ContactDetails sub_heading={'Phone:'} data={'(123)123-456'} logo={faPhoneAlt}  color={darkColor}/>
                        <ContactDetails sub_heading={'Fax:'} data={'(123)123-456'} logo={faFax}  color={darkColor}/>
                        <ContactDetails sub_heading={'Web'} data = {'#'} link={'www.example.com'} logo={faGlobe}  color={darkColor}/>
                        <ContactDetails sub_heading={'E-Mail:'} data={'#'} link={'office@example.com'} logo={faEnvelope}  color={darkColor}/>
    
                    </styles.find_us>
                    
                    <styles.contact_form onSubmit={this.send}>
                    <styles.heading>Contact Form</styles.heading>
                    <styles.SuccessMessage style={{display:this.state.success?"flex":"none"}}><p>Your Message has been sent successfully</p></styles.SuccessMessage>
                    <styles.name_email>
                        <styles.input placeholder="Name" type = "text" required="required"
                            onChange={this.handleNameChange}></styles.input>
                        <styles.input placeholder="Email" type="email"  required="required"
                            onChange={this.handleEmailChange}></styles.input>
                        
                    </styles.name_email>
                    <styles.input placeholder ="subject" type="text"  required="required"
                            onChange={this.handleSubjectChange}></styles.input>
                    <styles.inputarea placeholder="Message" type="text"  required="required"
                            onChange={this.handleMessageChange}></styles.inputarea>
                            
                    <styles.button color = {darkColor} type="submit">SUBMIT MESSAGE</styles.button>
                    
                </styles.contact_form>
                </styles.contact_us>
                
            </div>
        )
    }
    handleEmailChange = (event) => {
        this.data.email = event.target.value
    }

    handleNameChange = (event) => {
        this.data.name = event.target.value
    }

    handleSubjectChange = (event) => {
        this.data.subject = event.target.value
    }

    handleMessageChange = (event) => {
        this.data.message = event.target.value
    }

    send = (event) => {

        event.preventDefault();
        console.log("sending... name = " + this.data.name);

        var db = firebase.firestore();
        db.collection("Customer Query").add({
            email: this.data.email,
            name: this.data.name,
            subject: this.data.subject,
            message: this.data.message
        }).then(
            this.setState({
                success:true
            })
        )
    }
}


export default Contact;