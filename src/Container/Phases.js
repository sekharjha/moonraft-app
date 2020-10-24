import React from 'react'
import Cards  from '../component/PhaseCards'
import Card from '../component/PhaseCards/Card'
import {Data} from '../component/PhaseCards/data'
export default function Phases() {
    return (
        <Cards>
            <Cards.Wrapper>
            <Cards.Title>Phases Of Project Management</Cards.Title>
            <Cards.Row>
                {Data.map((item,index)=>{
                        return(
                            <Cards.Column key={index}>
                                <Card iconName = {item.iconName} heading = {item.heading} description = {item.description} />
                            </Cards.Column>
                        )
                    })}
            </Cards.Row>
            </Cards.Wrapper>
        </Cards>
    )
}