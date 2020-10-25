import React, { Component } from 'react'
import {Card, Icon, IconHeader} from './style'
import { IconBox } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from "../../Theme";
export default class Cards extends Component {
    static contextType = ThemeContext;
    render() {
        const { darkColor } = this.context;
        return (
           <Card>
               <IconBox>
                   <Icon color={darkColor}>
                    <FontAwesomeIcon icon = {this.props.iconName}></FontAwesomeIcon>
                   </Icon>
                    <IconHeader>{this.props.heading}</IconHeader>
                    <p>{this.props.description}</p>
               </IconBox>
           </Card>
        )
    }
}
