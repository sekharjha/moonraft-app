import styled from "styled-components";


export const StyledDiv = styled.div`
display: flex;
justify-content: stretch;
align-items: center;
height: 400px;
width: 100vw;
color: #fff;
margin: 15px;
`;
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 15px;
`;
export const Container = styled.div`
 padding-bottom:60px;
`
export const ContainerHead = styled.h3`
  padding-bottom:40px;
  margin: 58px 0 48px 0;
    font-size: 28px;
    margin-bottom: 30px !important;
    margin-top: 70px !important;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;

`
export const Buttonleft = styled.button`
  height:80px;
  font-size:30px;
  padding:20px;
  padding-left:40px;
  padding-right:40px;
  border:none;
  z-index:200;
  position: absolute;
  top:60%;
  &:hover{
    background-color: ${props => props.color};
    color:white;
  }
  @media (max-width: 1000px) {
    display:none;
   }
`
export const ButtonRight = styled.button`
  height:80px;
  font-size:30px;
  padding:20px;
  padding-left:40px;
  padding-right:40px;
  border:none;
  z-index:200;
  position: absolute;
  margin-left:-80px;
  top:60%;
  right:0%;
  &:hover{
    background-color: ${props => props.color};
    color:white;
  }
  @media (max-width: 1000px) {
   display:none;
  }
`
export const CarouselContainer = styled.div`
  display:flex;
  align-items:row;
`
export const ContentContainer = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  top:6%;
  left:-90%;
  min-width:435px;
  min-height:200px;
`
export const Heading = styled.h2`
  display:inline;
  letter-spacing: 0px;
  font-weight: 800;
  line-height: 70px;
  border-width: 0px;
  margin: 0px 0px 0px;
  padding: 0px;
  Sfont-size: 42px;
  color:black;
  color:#ffffff;
  padding:20px;
`
export const Paragraph = styled.p`
padding:20px;
display:inline;
letter-spacing: 0px;
font-weight: 600;
line-height: 40px;
border-width: 0px;
margin: 0px 0px 15px;
padding: 16px;
font-size: 21px;
color:black;
color:#ffffff;
`
export const Image = styled.img`
  min-width:100vw;
  opacity:0.7;
`
export const Button = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 25px;
    font-size: 18px;
    color: white;
    border:none;
    font-weight: bold;
    background: ${props => props.color};
    &:hover{
      background:white;
      color: ${props => props.color};
  }
`
export const ButtonContainer = styled.div`
  padding-top:20px;
    opacity:0.9;
    &:hover{
      opacity:1.2;
  }
`
export const SmallImageContainer = styled.div`
  position:relative;
  top:17%;
  left:-63%;
  min-width:435px;
  min-height:100px;
`
export const SmallImage = styled.img`
    max-width:635px;
    max-height:500px;
    object-fit:contain;
`

