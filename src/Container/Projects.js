import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Cards from '../component/projectCards'
import Card from '../component/projectCards/card'
import {Data} from '../component/projectCards/data'
import { ThemeContext } from "../Theme";
import {withRouter} from 'react-router-dom'
 class Projects extends Component {
    static contextType = ThemeContext;
    constructor(props){
        super(props);
        this.state={
            type:"PEOPLE",
            all:true
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

    render() {
        const { darkColor } = this.context;
        return (
            <Cards>
                <Cards.Title style ={{paddingTop:"60px"}}>Our Latest Projects</Cards.Title>
                <Cards.Row style={{align:"center"}}>
                <Cards.Column style = {{padding:"50px"}}><button style = {{backgroundColor:darkColor,color:"white",borderRadius:"10px",border:"none"}} onClick={this.handleClick}>ALL</button></Cards.Column>
                <Cards.Column style = {{padding:"50px"}}><button style = {{backgroundColor:darkColor,color:"white",borderRadius:"10px",border:"none"}}onClick={this.handleClickPEOPLE}>PEOPLE</button></Cards.Column>
                <Cards.Column style = {{padding:"50px"}}><button style = {{backgroundColor:darkColor,color:"white",borderRadius:"10px",border:"none"}}onClick={this.handleClickANIMALS}>ANIMALS</button></Cards.Column>
                <Cards.Column style = {{padding:"50px"}}><button style = {{backgroundColor:darkColor,color:"white",borderRadius:"10px",border:"none"}}onClick={this.handleClickOTHERS}>OTHERS</button></Cards.Column>
                </Cards.Row>
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
            </Cards>
        )
    }
}
export default withRouter(Projects)