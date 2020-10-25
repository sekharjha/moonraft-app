import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';
import one from '../../Assets/Images/logo-01.png'
import two from '../../Assets/Images/logo-02.png'
import three from '../../Assets/Images/logo-03.png'
import four from '../../Assets/Images/logo-04.png'
import five from '../../Assets/Images/logo-05.png'
import six from '../../Assets/Images/logo-06.png'
import seven from '../../Assets/Images/logo-07.png'
import {Container, ContainerHead, Item, StyledDiv} from './style'
import  './style.css'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5},
  ];
export default class BottomCarousel extends Component {

    
    state = {
        items: [
          {id: 1, url: one},
          {id: 2, url: two},
          {id: 3,url :three},
          {id: 4, url: four},
          {id: 5, url: five},
          {id: 6,url :six},
          {id:7,url:seven}
        ]
      }
      
    render() {
        const { items } = this.state;
        return (
            <div>
              <Container>
                <ContainerHead>Some Of Our Happy Clients, <span style={{color:'#44b272'}}>Join To Them!</span></ContainerHead>
                <Carousel className ="bottomCarousel" breakPoints={breakPoints} showArrows={false}>
                    {items.map(item => <Item key={item.id}><img src={item.url}></img></Item>)}
                </Carousel>
                </Container>
            </div>
        )
    }
}
