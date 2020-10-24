import React, { Component } from 'react'
import {Card, Icon, IconHeader} from './style'
import { IconBox } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Cards extends Component {
 
    render() {
        
        return (
           <Card>
               <IconBox>
                   <Icon>
                    <FontAwesomeIcon icon = {this.props.iconName}></FontAwesomeIcon>
                   </Icon>
                    <IconHeader>{this.props.heading}</IconHeader>
                    <p>{this.props.description}</p>
               </IconBox>
           </Card>
        )
    }
}
