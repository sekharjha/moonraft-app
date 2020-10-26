import React from 'react'
import * as styles from './styles'
import image1 from '../../Assets/Images/project-01.jpg'
import image2 from '../../Assets/Images/project-02.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {withRouter} from 'react-router-dom'
import {Data} from './data'
import {faShip,faBoxOpen,faHandHoldingWater,faCloud} from '@fortawesome/free-solid-svg-icons'
    const ViewPage = (props) => {
        let index = props.location.aboutProps.index;
        const {heading,desription1,description2,date,location,category,subheading1,subheading2,subDescription} =   Data[index.index]; 
        const images = require.context('../../Assets/Images/', true);
                        let img = images('./' + props.location.aboutProps.data.item.imageName); 
    return(
        <div>
            <styles.header style={{backgroundImage:"{img}"}}>
                <styles.title>{props.location.aboutProps.data.item.title}</styles.title>
            </styles.header>
            <styles.content>
                    <styles.content1>

                        <styles.heading>{props.location.aboutProps.data.item.title}</styles.heading>
                        <styles.text>{desription1}</styles.text>
                            <styles.text>{description2}</styles.text>
                        
                    </styles.content1>
                    <styles.content2>
                        <styles.data>
                            <styles.data_field>Date: </styles.data_field>
                            <styles.data_value>{date}</styles.data_value>
                            <styles.line></styles.line>
                        </styles.data>
                        <styles.data>
                            <styles.data_field>Location: </styles.data_field>
                            <styles.data_value>{location}</styles.data_value>
                            <styles.line></styles.line>
                        </styles.data>
                        <styles.data>
                            
                            <styles.data_field>Category: </styles.data_field>
                            <styles.data_value>{category}</styles.data_value>
                        </styles.data>
                       
                    </styles.content2>
                </styles.content>
                <styles.grid>
                    <styles.field1>
                        <styles.heading1>{subheading1} </styles.heading1>
                        <styles.heading1>{subheading2}</styles.heading1>
                        <styles.text1>{subDescription}</styles.text1>
                    </styles.field1>
                    <styles.field2 src={img} />
                </styles.grid>
                <styles.grid1>
                    <styles.field3>
                        <styles.cellgrid>
                            <styles.cell>
                                <styles.icon><FontAwesomeIcon  icon={faShip} size='4x'/></styles.icon>
                                <styles.heading2>Visual Identity</styles.heading2>
                                <styles.text2>Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In ultrices augue eget.</styles.text2>
                            </styles.cell>
                            <styles.cell>
                                <styles.icon><FontAwesomeIcon  icon={faBoxOpen} size='4x'/></styles.icon>
                                <styles.heading2>Package Design</styles.heading2>
                                <styles.text2>Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In ultrices augue eget.</styles.text2>
                            </styles.cell>

                        </styles.cellgrid>
                        <styles.cellgrid>
                            <styles.cell>
                                <styles.icon><FontAwesomeIcon  icon={faHandHoldingWater} size='4x'/></styles.icon>
                                <styles.heading2>Ecological Paper</styles.heading2>
                                <styles.text2>Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In ultrices augue eget.</styles.text2>
                            </styles.cell>
                            <styles.cell>
                                <styles.icon><FontAwesomeIcon  icon={faCloud} size='4x'/></styles.icon>
                                <styles.heading2>Audit and Assurance</styles.heading2>
                                <styles.text2>Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In ultrices augue eget.</styles.text2>
                            </styles.cell>

                        </styles.cellgrid>
                    </styles.field3>
                    <styles.field2 src={image2} />
                </styles.grid1>
        </div>
    )
}
export default withRouter(ViewPage);