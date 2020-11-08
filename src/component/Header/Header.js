import React from 'react'
import * as styles from './styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faGooglePlus, faDribbble, faPinterestP, faTwitter} from '@fortawesome/free-brands-svg-icons'
import ColorSwitcher from "../colorswticher/colorswticher"
import firebase from "../../firebase";
import { withRouter } from 'react-router-dom';
 class header extends React.Component{
    logOut = () =>{
        console.log("Logout")
        localStorage.setItem("logged",false);
        firebase.auth().signOut();
        this.props.history.push({
            pathname: "/",
          })
      }
      render(){
        return (
           
            <div>
                
                <styles.header>
                <ColorSwitcher></ColorSwitcher>
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

export default withRouter(header);
