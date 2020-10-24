import React from 'react'
import * as styles from './styles'
import logo from '../../Assets/Images/logo-2.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link,withRouter} from 'react-router-dom'

import {faSearch, faShoppingCart,faBars } from '@fortawesome/free-solid-svg-icons'

const currentTab = (history,path) =>{
    if(history.location.pathname===path){
        return {
            paddingBottom:'40px',
            borderBottom:'3px solid #44B272',
        }
    }
}

const navBar  = ({history}) =>(
        <div>
            <styles.navBar_container>
                <styles.logo src={logo} alt="logo"/>
                   
                <styles.nav_container>
                   
                    <styles.nav_tabs style={currentTab(history,"/")} > <Link style={{textDecoration:'none', color:'#373737'}} exact to="/">
                        Home
                    </Link></styles.nav_tabs>
                    <styles.nav_tabs><Link to="/Portfolio" style={{textDecoration:'none', color:'#373737'}}>PORTFOLIO</Link></styles.nav_tabs>
                    <styles.nav_tabs ><Link to="/Pages" style={{textDecoration:'none', color:'#373737'}}>PAGES</Link></styles.nav_tabs>
                    <styles.nav_tabs ><Link to="/Elements" style={{textDecoration:'none', color:'#373737'}}>ELEMENTS</Link></styles.nav_tabs>
                    <styles.nav_tabs ><Link to="/Shop" style={{textDecoration:'none', color:'#373737'}}>SHOP</Link></styles.nav_tabs>
                    <styles.nav_tabs ><Link to="/Blog" style={{textDecoration:'none', color:'#373737'}}>BLOG</Link></styles.nav_tabs>
                    <styles.nav_tabs style={currentTab(history,"/Contact")}><Link to="/Contact" style={{textDecoration:'none', color:'#373737'}}>CONTACT</Link></styles.nav_tabs>

                </styles.nav_container>
                <styles.mobile_nav>
                    <styles.mobile_nav_menu><FontAwesomeIcon  icon={faBars} size='lg'/>&nbsp; &nbsp;MENU</styles.mobile_nav_menu>
                    <styles.mobile_nav_search><FontAwesomeIcon  icon={faSearch} size='2x'/></styles.mobile_nav_search>
                </styles.mobile_nav>

                <styles.icons>
                    <styles.icon><FontAwesomeIcon  icon={faSearch} size='lg'/></styles.icon>
                    <styles.icon><FontAwesomeIcon  icon={faShoppingCart} size='lg'/></styles.icon>
                </styles.icons>
            </styles.navBar_container>
        </div>

    )

export default withRouter(navBar);