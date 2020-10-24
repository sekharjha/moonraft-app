import React from 'react'
import {Container,Wrapper,Row,Column} from './style/cards'

export default function Card({children, ...restProps})
{
    return <Container{...restProps}>{children}</Container>
}
Card.Wrapper = function CardWrapper({children, ...restProps}){
    return  <Wrapper { ...restProps}>{children}</Wrapper>
}
Card.Row = function CardWrapper({children, ...restProps}){
    return  <Row { ...restProps}>{children}</Row>
}
Card.Column = function CardWrapper({children, ...restProps}){
    return  <Column { ...restProps}>{children}</Column>
}