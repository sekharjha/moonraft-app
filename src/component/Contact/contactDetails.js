import React from 'react'
import * as styles from './styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const contactDetails = (props) => {
    
    return(
        <div>
            <styles.contact_details>
                    <styles.logo><FontAwesomeIcon  icon={props.logo} size='2x'/></styles.logo>
                    <styles.div>
                        <styles.sub_heading>{props.sub_heading}</styles.sub_heading>
                        {props.data==='#'?<styles.link href="#"  color={props.color}>{props.link}</styles.link>:<styles.data>{props.data}</styles.data>}
                    </styles.div>
            </styles.contact_details>
        </div>
    );
}

export default contactDetails;