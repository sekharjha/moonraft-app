import React from 'react'
import * as styles from './styles'
import image1 from '../../Assets/Images/project-03.jpg'
import image2 from '../../Assets/Images/project-02.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import {faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const ViewPage = () => {
    
    return(
        <div>
            <styles.slider>
                <styles.slide>
                    <styles.arrow><Link to="/Home/View/01" style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon  icon={faChevronLeft} size='3x'/></Link> </styles.arrow>
                    <styles.title>Single Project - Content Left</styles.title>
                    <styles.arrow><Link to="/Home/View/02" style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon  icon={faChevronRight} size='3x'/></Link></styles.arrow>
                </styles.slide>
            </styles.slider>
            <styles.container>
            <styles.content>
                    <styles.heading>Project Description</styles.heading>
                    <styles.text>Nulla congue magna varius pellentesque.Entesque habitant morbi tristique senectus lorem et netus et malesuada fames ac turpis egestas.</styles.text>
                    <styles.text>Vestibulum quis ipsum ipsum. Maecenas ullamcorper nibh sed justo iaculis lacinia. Nam eu arcu facilisis, condimentum urna et, tempor erat.</styles.text>
                    <styles.data>
                        <styles.data_field>Date: </styles.data_field>
                        <styles.data_value>11 January 2016</styles.data_value>
                        <styles.line></styles.line>
                    </styles.data>
                    <styles.data>
                        <styles.data_field>Location: </styles.data_field>
                        <styles.data_value>London</styles.data_value>
                        <styles.line></styles.line>
                    </styles.data>
                    <styles.data>
                        <styles.data_field>Category: </styles.data_field>
                        <styles.data_value>Kitchen, Carpentry</styles.data_value>
                    </styles.data>
                    <styles.button>LAUNCH PROJECT</styles.button>
            </styles.content>
                <styles.images>
                    
                    <styles.img src={image1}/>
                    <styles.img src={image2}/>
                    
                    
                </styles.images>
               
                
            </styles.container>
            
        </div>
    )
}

export default ViewPage;