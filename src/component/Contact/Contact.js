import React from 'react'
import * as styles from './styles'
import ContactDetails from './contactDetails'
import {faPhoneAlt, faFax, faGlobe, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = () =>{
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
                    <ContactDetails sub_heading={'Phone:'} data={'(123)123-456'} logo={faPhoneAlt}/>
                    <ContactDetails sub_heading={'Fax:'} data={'(123)123-456'} logo={faFax}/>
                    <ContactDetails sub_heading={'Web'} data = {'#'} link={'www.example.com'} logo={faGlobe}/>
                    <ContactDetails sub_heading={'E-Mail:'} data={'#'} link={'office@example.com'} logo={faEnvelope}/>

                </styles.find_us>
                <styles.contact_form>
                    <styles.heading>Contact Form</styles.heading>
                    <styles.name_email>
                        <styles.input placeholder="Name"></styles.input>
                        <styles.input placeholder="Email"></styles.input>
                        
                    </styles.name_email>
                    <styles.input placeholder="subject"></styles.input>
                    <styles.inputarea placeholder="Message"></styles.inputarea>
                    <styles.button>SUBMIT MESSAGE</styles.button>
                </styles.contact_form>
            </styles.contact_us>
            
        </div>
    )
}

export default Contact;