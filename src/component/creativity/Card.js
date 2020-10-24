import React, { Component } from 'react'
import img  from '../../Assets/slide-01.jpg'
import {Image,Content} from './styles/style'
import * as styles from './styles/style'
export default class Card extends Component {
    render() {
        return (
                <styles.Wrapper>
                <styles.Row>
                    <styles.Column>
                      <Content>
                          <styles.Heading>
                              The Heart Of Creativity
                          </styles.Heading>
                          <styles.Pcontainer><p>Efficiently enable enabled sources and cost effective products. Completely synthesize principle-centered information after ethical communities.</p></styles.Pcontainer>
                          </Content>
                       
                        
                        <Content><Image src = {img}></Image></Content>
                        </styles.Column>
                </styles.Row>
                </styles.Wrapper>
        )
    }
}
