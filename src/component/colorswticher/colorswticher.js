import { ThemeContext } from "../../Theme";

import React, { Component } from 'react'

import {Button,ButtonContainer, MainButton,Container} from './style'

export default class colorswticher extends Component {
    constructor(){
        super();

        this.state = {
           display: false
        }
    }

    static contextType = ThemeContext;
    changeColor_RED = () => {
        const { changeTheme } = this.context;
        changeTheme(
            {
                lightColor: "#FF6666",
                darkColor: "#FF0000",
            }
        )
    }

    changeColor_GREEN = () => {
        const { changeTheme } = this.context;
        changeTheme(
            {
                lightColor: "#a1d8b8",
                darkColor: "#44b272"
            }
        )
    }

    changeColor_BLUE = () => {
        const { changeTheme } = this.context;
        changeTheme(
            {
                lightColor: "#6272d5",
                darkColor: "#3448c5",
            }
        )
    }
    changeColor_YELLOW = () =>{
        const {changeTheme} = this.context;
        changeTheme({
            lightColor:"#faef55",
            darkColor:"#f5e942",
        })
    }
    showHide(){
       this.setState({display: !this.state.display})

    }
    render() {
        const disp = this.state.display?"block":"none";
        return (
            <div>
                <Container>
                <MainButton onClick={this.showHide.bind(this)}><i class="fa fa-cog" aria-hidden="true"></i></MainButton>
                <ButtonContainer style = {{display:disp}}>
                <Button color="#FF0000" onClick={this.changeColor_RED}></Button>
                <Button color="#44b272" onClick={this.changeColor_GREEN}></Button>
                <Button color="#3448c5" onClick={this.changeColor_BLUE}></Button>
                <Button color="#f5e942" onClick={this.changeColor_YELLOW}></Button>
                </ButtonContainer> 
                </Container>  
            </div>
        )
    }
}
