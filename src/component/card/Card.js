import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import {CardBody,CardElement,CardContent,Icon} from './style'
export default class Card extends Component {
    render() {
        return (
            <CardBody>
					<CardContent>
						<CardElement>
							<Icon>
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
