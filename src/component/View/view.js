import React from 'react'
import * as styles from './styles'
import image1 from '../../Assets/Images/project-01.jpg'
import image2 from '../../Assets/Images/project-02.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faShip,faBoxOpen,faHandHoldingWater,faCloud} from '@fortawesome/free-solid-svg-icons'
const ViewPage = (props) => {
console.log(props)
    return(
        <div>
            <styles.header>
                <styles.title>Single Project - Full Screen</styles.title>
            </styles.header>
            <styles.content>
                    <styles.content1>

                        <styles.heading>Project Name</styles.heading>
                        <styles.text>Maecenas molestie fermentum luctus. Cras lacinia molestie nibh. Pellentesque non magna ac dui varius auctor at sed nunc. Fusce bibendum eros sed mattis accumsan. Nam mattis convallis elit, ut condimentum nulla commodo nec. Aenean eget metus sed turpis molestie porta vitae non libero.</styles.text>
                        <styles.text>Maecenas vehicula ultrices magna, vitae placerat nibh rhoncus sit amet. Vestibulum congue suscipit sagittis. Phasellus at dui eget metus consectetur laoreet id ac mi. Proin nisl mi, gravida sed maximus ut, sodales dictum velit. Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In ultrices augue eget nibh convallis, quis laoreet tortor lacinia.</styles.text>
                        
                    </styles.content1>
                    <styles.content2>
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
                       
                    </styles.content2>
                </styles.content>
                <styles.grid>
                    <styles.field1>
                        <styles.heading1>Don't Hestitate, </styles.heading1>
                        <styles.heading1>Let Out Your Creative Beast</styles.heading1>
                        <styles.text1>Avenger is a powerful multipurpose template, excellent compromise among the conflicting requirements of novelty, simplicity, elegance and function.</styles.text1>
                    </styles.field1>
                    <styles.field2 src={image1} />
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
export default ViewPage;