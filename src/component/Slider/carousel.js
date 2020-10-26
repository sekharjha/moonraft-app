import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import one from '../../Assets/slide-01.jpg'
import two from '../../Assets/slide-03.jpg' 
import { ThemeContext } from "../../Theme";
import {StyledDiv,Buttonleft,ButtonRight,CarouselContainer,Heading,ContentContainer, Paragraph,Image,Button,ButtonContainer} from './style'
class CarouselComponent extends Component {
  static contextType = ThemeContext;
  state = {
    items: [
      {id: 1, url: one,heading:"Web Design Toolkit",paragraph:"Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an expanded array of niche markets through robust products."},
      {id: 2, url: two,heading:"Creative Essence",paragraph:"Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an expanded array of niche markets through robust products."},
    ]
  }
  
  render () {
    const { darkColor } = this.context;
    const { items } = this.state;
    return (<CarouselContainer>
      <Buttonleft color={darkColor} onClick={() => this.carousel.slidePrev()}><i class="fa fa-angle-right" aria-hidden="true"></i></Buttonleft>


      <Carousel style ={{width:"100%",height:"100%"}}ref={ref => (this.carousel = ref)} className="topCarousel" enableAutoPlay = {true} showArrows={false} >
    {items.map(item => <StyledDiv key={item.id}><Image src={item.url}></Image><ContentContainer><Heading>{item.heading}</Heading><Paragraph>{item.paragraph}</Paragraph>
      <ButtonContainer><Button color={darkColor}>Purchase Now</Button></ButtonContainer>
    </ContentContainer>
    </StyledDiv>)}
      </Carousel>

      
      <ButtonRight color={darkColor} onClick={() => this.carousel.slideNext()}><i class="fa fa-angle-left" aria-hidden="true"></i></ButtonRight>
      </CarouselContainer>
    )
  }
}

export default CarouselComponent;