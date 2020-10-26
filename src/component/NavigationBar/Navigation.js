import React from 'react'
import * as styles from './styles'
import logo from '../../Assets/Images/logo-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter } from 'react-router-dom'

import { faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from "../../Theme";


const currentTab = (history, path, color) => {
    let design = '2px solid '+color
    if (history.location.pathname === path) {
        return {
            paddingBottom: '40px',
            borderBottom: design,
        }
    }
}

class navBar extends React.Component {
    static contextType = ThemeContext;


    render() {
        const { history } = this.props;
        const { darkColor } = this.context;

        return (<div>

            <styles.navBar_container>
            
                <styles.logo src={logo} alt="logo" />
                


                <styles.nav_container color={darkColor}>

                    <styles.nav_tabs  color={darkColor} style={currentTab(history, "/", darkColor)}>
                        <Link style={{ textDecoration: 'none', color: '#373737' }} exact to="/">Home</Link>
                    </styles.nav_tabs>

                    <styles.nav_tabs color={darkColor}style={currentTab(history, "/Portfolio", darkColor)}><Link to="/Portfolio" style={{ textDecoration: 'none', color: '#373737' }}>PORTFOLIO</Link></styles.nav_tabs>
                    <styles.nav_tabs color={darkColor} style={currentTab(history, "/Pages", darkColor)}><Link to="/Pages" style={{ textDecoration: 'none', color: '#373737' }}>PAGES</Link></styles.nav_tabs>
                    <styles.nav_tabs  color={darkColor} style={currentTab(history, "/Elements", darkColor)}><Link to="/Elements" style={{ textDecoration: 'none', color: '#373737' }}>ELEMENTS</Link></styles.nav_tabs>
                    <styles.nav_tabs  color={darkColor} style={currentTab(history, "/Shop", darkColor)}><Link to="/Shop" style={{ textDecoration: 'none', color: '#373737' }}>SHOP</Link></styles.nav_tabs>
                    <styles.nav_tabs color={darkColor} style={currentTab(history, "/Blog", darkColor)}><Link to="/Blog" style={{ textDecoration: 'none', color: '#373737' }}>BLOG</Link></styles.nav_tabs>
                    <styles.nav_tabs color={darkColor} style={currentTab(history, "/Contact", darkColor)}><Link to="/Contact" style={{ textDecoration: 'none', color: '#373737' }}>CONTACT</Link></styles.nav_tabs>

                </styles.nav_container>

                <styles.mobile_nav>
                    <styles.mobile_nav_menu><FontAwesomeIcon icon={faBars} size='lg' />&nbsp; &nbsp;MENU</styles.mobile_nav_menu>
                    <styles.mobile_nav_search><FontAwesomeIcon icon={faSearch} size='2x' /></styles.mobile_nav_search>
                </styles.mobile_nav>

                <styles.icons>
                    <styles.icon><FontAwesomeIcon icon={faSearch} size='lg' /></styles.icon>
                    <styles.icon><FontAwesomeIcon icon={faShoppingCart} size='lg' /></styles.icon>
                </styles.icons>

            </styles.navBar_container>
        </div>
        )
    }
}

export default withRouter(navBar);