import React from 'react'
import * as styles from './styles'
import logo from '../../Assets/Images/logo-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter } from 'react-router-dom'
import {SidebarData} from './sidebardata'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons'
import  './style.css'
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
    constructor(props){
        super(props);
        this.state = {
            sidebar:false
        }
    }
    showSideBar() {
        this.setState({sidebar: !this.state.sidebar})
    }
    render() {
        const { history } = this.props;
        const { darkColor } = this.context;

        return (<div>

            <styles.navBar_container>
            
                <styles.logo src={logo} alt="logo" />
                


                <styles.nav_container color={darkColor}>

                    <styles.nav_tabs  color={darkColor} style={currentTab(history, "/home", darkColor)}>
                        <Link style={{ textDecoration: 'none', color: '#373737' }} exact to="/home">HOME</Link>
                    </styles.nav_tabs>

                    <styles.nav_tabs color={darkColor}style={currentTab(history, "/Portfolio", darkColor)}><Link to="/Portfolio" style={{ textDecoration: 'none', color: '#373737' }}>PORTFOLIO</Link></styles.nav_tabs>
                    <styles.nav_tabs color={darkColor} style={currentTab(history, "/Pages", darkColor)}><Link to="/Pages" style={{ textDecoration: 'none', color: '#373737' }}>PAGES</Link></styles.nav_tabs>
                    <styles.nav_tabs  color={darkColor} style={currentTab(history, "/Elements", darkColor)}><Link to="/Elements" style={{ textDecoration: 'none', color: '#373737' }}>ELEMENTS</Link></styles.nav_tabs>
                    <styles.nav_tabs  color={darkColor} style={currentTab(history, "/Shop", darkColor)}><Link to="/Shop" style={{ textDecoration: 'none', color: '#373737' }}>SHOP</Link></styles.nav_tabs>
                    <styles.nav_tabs color={darkColor} style={currentTab(history, "/Blog", darkColor)}><Link to="/Blog" style={{ textDecoration: 'none', color: '#373737' }}>BLOG</Link></styles.nav_tabs>
                    <styles.nav_tabs color={darkColor} style={currentTab(history, "/Contact", darkColor)}><Link to="/Contact" style={{ textDecoration: 'none', color: '#373737' }}>CONTACT</Link></styles.nav_tabs>

                </styles.nav_container>

                <styles.mobile_nav>
                    <styles.mobile_nav_menu >
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick ={this.showSideBar.bind(this)}/>
                        </Link>    
                    &nbsp; &nbsp;<styles.menu>MENU</styles.menu></styles.mobile_nav_menu>
                    <IconContext.Provider value={{color:'#fff'}}>
                        <nav className={this.state.sidebar? "nav-menu active": "nav-menu" }>
                            <ul className="nav-menu-items" >
                                <li className="navbar-toggle">
                                    <Link to="#" className="menu-bars">
                                        <AiIcons.AiOutlineClose onClick ={this.showSideBar.bind(this)} />
                                    </Link>
                                </li>
                                {SidebarData.map((item, index)=>{
                                    return(
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                <span>{item.icon}</span>
                                                <span>{item.title}</span>
                                            </Link>
                                            
                                        </li>
                                    )
                                })}

                            </ul>
                        </nav>
                    </IconContext.Provider>
                    
                    <styles.mobile_nav_search ><FontAwesomeIcon  icon={faSearch} size='2x'/></styles.mobile_nav_search>
                </styles.mobile_nav>

                <styles.icons>
                    <styles.icon><FontAwesomeIcon  icon={faSearch} size='lg'/></styles.icon>
                    <styles.icon><FontAwesomeIcon  icon={faShoppingCart} size='lg'/></styles.icon>
                </styles.icons>
            </styles.navBar_container>
        </div>
        )
    }
}

export default withRouter(navBar);