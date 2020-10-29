import React from 'react'
import {Container,Wrapper,Row,Column,Link,Title,SearchRow,ButtonRow} from './style/cards'

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
Card.Link = function FooterLink({children, ...restProps}){
    return  <Link { ...restProps}>{children}</Link>
}
Card.Title = function CardWrapper({children,...restProps}){
    return <Title { ...restProps}>{children}</Title>
}
Card.SearchRow = function CardWrapper({children,...restProps}){
    return <SearchRow { ...restProps}>{children}</SearchRow>
}
Card.ButtonRow = function CardWrapper({children,...restProps}){
    return <ButtonRow { ...restProps}>{children}</ButtonRow>
}