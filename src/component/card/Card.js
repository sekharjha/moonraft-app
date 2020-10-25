import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import {CardBody,CardElement,CardContent,Icon} from './style'
import { ThemeContext } from "../../Theme";
export default class Card extends Component {
	static contextType = ThemeContext;
    render() {
		const { darkColor } = this.context;
        return (

            <CardBody color={darkColor}>
					<CardContent color={darkColor}>
						<CardElement color={darkColor}>
							<Icon color={darkColor}>
								<FontAwesomeIcon  icon = {this.props.iconName}></FontAwesomeIcon>
							</Icon>
							<h4>{this.props.heading} </h4>
							<p>{this.props.description}</p>
						</CardElement>
					</CardContent>
				</CardBody>
        )
    }
}
