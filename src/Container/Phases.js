import React from 'react'
import Cards  from '../component/PhaseCards'
import Card from '../component/PhaseCards/Card'
import {connect} from "react-redux"

 function Phases(props) {
    const Data = props.myData
     
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
const mapStateTopProps = (state) =>{
    return {
        myData:state.phaseReducer
    }
}
export default connect(mapStateTopProps)(Phases);