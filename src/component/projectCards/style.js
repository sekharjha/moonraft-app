import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    width: 100%;
        &:hover .image{
            opacity:0.3;
        
 }   
 &:hover .middle{
            opacity:1;
}
`
export const InactiveCard = styled(Card)`
    opacity:0.3;
    &:hover .middle{
            opacity:0;
}
`
export const Image = styled.img`
    opacity: 1;
    width: 100%;
    height: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
`
export const Middle= styled.div`
transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`
export const Text = styled.div`
    color: black;
    font-size: 16px;
    padding: 16px 32px;
  
`
export const ButtonContainer = styled.div`
    padding-top:40px;
    padding-bottom:40px;
    padding-left:40vw;
    padding-right:40vw;
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
  border:1px solid ${props => props.color};
}
`