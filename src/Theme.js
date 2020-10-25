import React, { Component, createContext } from 'react';


export const ThemeContext = createContext();

export default class ThemeProvider extends Component {

        //..blue theme
        // state = {
        //         lightColor: "#6272d5",
        //         darkColor: "#3448c5",
        // };

        //..green theme
        state = {
                lightColor: "#a1d8b8",
                darkColor: "#44b272"
        }

        changeTheme = (newstate) =>{
                this.setState(
                        {
                                ...newstate
                        }
                );
        }

        render() {
                return (
                        <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                                {this.props.children}
                        </ThemeContext.Provider>
                );
        }
}