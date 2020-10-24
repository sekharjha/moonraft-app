import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import one from '../../Assets/slide-01.jpg'
import two from '../../Assets/slide-03.jpg' 
import {StyledDiv,Buttonleft,ButtonRight,CarouselContainer} from './style'
class CarouselComponent extends Component {
  state = {
    items: [
      {id: 1, url: one},
      {id: 2, url: two},
      {id: 3, url: one},
      {id: 4, url: two}
    ]
  }
  
  render () {
    const { items } = this.state;
    return (<CarouselContainer>
      <Buttonleft onClick={() => this.carousel.slidePrev()}><i class="fa fa-angle-right" aria-hidden="true"></i></Buttonleft>
      <Carousel style ={{width:"100%",height:"100%"}}ref={ref => (this.carousel = ref)} className="topCarousel" enableAutoPlay = {true} showArrows={false}>
        {items.map(item => <StyledDiv key={item.id}><img src={item.url}></img></StyledDiv>)}
      </Carousel>
      <ButtonRight onClick={() => this.carousel.slideNext()}><i class="fa fa-angle-left" aria-hidden="true"></i></ButtonRight>
      </CarouselContainer>
    )
  }
}

export default CarouselComponent;