import React from 'react'
import Cards from '../component/card'
import Card  from '../component/card/Card'
import {connect}  from 'react-redux'
 function FeatureContainer(props) {
    const Data =  props.myData 
    return (
        <Cards>
            <Cards.Title>Featured Services</Cards.Title>
            <Cards.Wrapper>
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
        myData:state.featureReducer
    }
}
export default connect(mapStateTopProps)(FeatureContainer);