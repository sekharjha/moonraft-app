import React, { Component, createContext } from 'react';


export const ThemeContext = createContext();

export default class ThemeProvider extends Component {
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