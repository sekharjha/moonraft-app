import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Cards from '../component/projectCards'
import Card from '../component/projectCards/card'
import { ThemeContext } from "../Theme";
import {Button,ButtonContainer, Search} from '../component/projectCards/style'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"
class Projects extends Component {
    static contextType = ThemeContext;
    constructor(props){
        super(props);
        this.state={
            type:"",
            all:true,
            name:""
         }
     this.handleClickPEOPLE = this.handleClickPEOPLE.bind(this)
     this.handleClickANIMALS = this.handleClickANIMALS.bind(this)    
     this.handleClickOTHERS = this.handleClickOTHERS.bind(this)   
     this.handleClick = this.handleClick.bind(this)     
    }
    handleClick(){
        this.setState(state=>({
            all:true
        })) 
    }
     handleClickPEOPLE(){
        
        this.setState(state=>({
            type : "PEOPLE",
            all:false
        }))   
    }
    handleClickANIMALS(){
       this.setState(state=>({
           type : "ANIMALS",
           all:false
       }))   
   }
   handleClickOTHERS(){

    this.setState(state=>({
        type : "OTHERS"
    }))   
 }
   handleClickSearch(valuesearch){
      
    var searchValue = valuesearch.toUpperCase();
    console.log(searchValue) 
    if("ALL".includes(searchValue)||searchValue==="")
    this.setState(state=>({
        type:searchValue,
        all:true,
        name:valuesearch
    }))
    else{
     if("PEOPLE".includes(searchValue))
        searchValue = "PEOPLE"
    else if("ANIMALS".includes(searchValue))
        searchValue="ANIMALS"
    else if("OTHERS".includes(searchValue))
          searchValue = "OTHERS"                   
    this.setState(state=>({
        type : searchValue,
        all:false,
        name : valuesearch,
    }))
}
}


    render() {
        const { darkColor } = this.context;
        const Data = this.props.myData;
        return (
            <Cards>
                <Cards.Title style ={{paddingTop:"60px"}}>Our Latest Projects</Cards.Title>
                <Cards.ButtonRow>
                <Cards.Row>
                <Cards.Column style = {{padding:"40px"}}><Button color={darkColor} onClick={this.handleClick}>ALL</Button></Cards.Column>
                <Cards.Column style = {{padding:"40px"}}><Button color={darkColor} onClick={this.handleClickPEOPLE}>PEOPLE</Button></Cards.Column>
                <Cards.Column style = {{padding:"40px"}}><Button color={darkColor} onClick={this.handleClickANIMALS}>ANIMALS</Button></Cards.Column>
                <Cards.Column style = {{padding:"40px"}}><Button color={darkColor} onClick={this.handleClickOTHERS}>OTHERS</Button></Cards.Column>
                </Cards.Row>
                </Cards.ButtonRow>
                <Cards.SearchRow>
                <Search color={darkColor} onChange = {(e)=>this.handleClickSearch(e.target.value)}placeholder="search"></Search>
                </Cards.SearchRow>
                <Cards.Row>
                {Data.map((item,index)=>{
                        const images = require.context('../Assets/Images/', true);
                        let img = images('./' + item.imageName);
                        if(this.state.all||this.state.type===item.type)
                        return(
                            <Link to={{
                                pathname:'/View',
                                aboutProps:{
                                    data:{item},
                                    index:{index}
                                }
                            }}>
                            <Cards.Column key={index}>
                                <Card data={img} title = {item.title} subtitle = {item.subtitle} active = {1}/>
                            </Cards.Column>
                            </Link>
                        )
                        else
                        return(
                            <Cards.Column key={index}>
                                <Card data={img} title = {item.title} subtitle = {item.subtitle} active = {0}/>
                            </Cards.Column>
                        )
                    })}
                    </Cards.Row>
                    <ButtonContainer><Button color={darkColor}>View All Projects</Button></ButtonContainer>
                    
            </Cards>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        myData:state.projectReducer
    }

}
export default withRouter(connect(mapStateToProps)(Projects))