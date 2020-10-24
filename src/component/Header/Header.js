import React from 'react'
import * as styles from './styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faGooglePlus, faDribbble, faPinterestP, faTwitter} from '@fortawesome/free-brands-svg-icons'
import firebase from "../../firebase";
export default class header extends React.Component{
    logOut = () =>{
        console.log("Logout")
        firebase.auth().signOut();
      }
      render(){
        return (
           
            <div>
                <styles.header>
                    <styles.info>
                        <styles.info_items><FontAwesomeIcon icon={faPhone}/>&nbsp; &nbsp;(564) 123-4567</styles.info_items>
                        <styles.info_items><FontAwesomeIcon icon={faEnvelope}/>&nbsp; &nbsp; mail@example.com</styles.info_items>
                        <styles.info_items>Dropdown Menu</styles.info_items>
                        
                    </styles.info>
                    <styles.icons>
                        <styles.facebook><FontAwesomeIcon back='red' icon={faFacebookF}/></styles.facebook>
                        <styles.twitter><FontAwesomeIcon back='red' icon={faTwitter}/></styles.twitter>
                        <styles.dribble><FontAwesomeIcon back='red' icon={faDribbble}/></styles.dribble>
                        <styles.google><FontAwesomeIcon back='red' icon={faGooglePlus}/></styles.google>
                        <styles.pinterest><FontAwesomeIcon back='red' icon={faPinterestP}/></styles.pinterest>

                    </styles.icons>
                    <styles.Button  onClick={this.logOut}>Logout</styles.Button>
                </styles.header>
                
            </div>
        );
      }
}

