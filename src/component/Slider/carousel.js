import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import one from '../../Assets/slide-01.jpg'
import two from '../../Assets/slide-03.jpg' 
import three from '../../Assets/slide-03-iphone.png'
import { ThemeContext } from "../../Theme";
import {StyledDiv,Buttonleft,ButtonRight,CarouselContainer,Heading,ContentContainer, Paragraph,Image,Button,ButtonContainer,SmallImageContainer,SmallImage} from './style'
class CarouselComponent extends Component {
  static contextType = ThemeContext;
  state = {
    items: [
      {id: 1, url: one,heading:"Web Design Toolkit",paragraph:"Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an expanded array of niche markets through robust products.",secImage:false,secUrl:""},
      {id: 2, url: two,heading:"Creative Essence",paragraph:"Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an expanded array of niche markets through robust products.",secImage:true,secUrl:three},
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
    <SmallImageContainer style={{display:item.secImage?"block":"none"}}><SmallImage src = {item.secUrl}></SmallImage></SmallImageContainer>
    </StyledDiv>)}
      </Carousel>

      
      <ButtonRight color={darkColor} onClick={() => this.carousel.slideNext()}><i class="fa fa-angle-left" aria-hidden="true"></i></ButtonRight>
      </CarouselContainer>
    )
  }
}

export default CarouselComponent;