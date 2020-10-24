import styled from 'styled-components'

import officeImage from '../../Assets/Images/contact-our-office.jpg'
import mapImage from '../../Assets/Images/GoogleMapTA.jpg'
export const location = styled.div`
    @media (min-width:1000px){
        display:flex;
    }
    
`
export const map = styled.div`
    width:100%;
    height:300px;
    background-repeat:no-repeat;
    background-size:100%;
    background-image:url(${mapImage});
    @media (min-width:1000px){
        height:400px;
        width:71%;
    }
    
`
export const office_background = styled.div`
    width:100%;
    height:350px;
    position: relative;
    @media (min-width:1000px){
        height:400px;
        width:29%;
    }
    
    background-image:url(${officeImage});
    &::before{
        content: "";
        height:350px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        background-color: #2b2c30;
        opacity: 0.9;
        
        @media (min-width:1000px){
             height:400px;
        
        }
    }
    
`
export const our_office = styled.p `
        
        position: absolute;
        color:white;
        font-size:32px;
        width:200px;
        text-align:center;
        font-weight:bold;
        left:50%;
        margin-left:-100px;
        margin-top:70px;
        @media (min-width:1000px){
            margin-top:100px;
        }
        
        
`
export const office_address = styled.div `
        position:absolute;
        color:white;
        font-size:14px;
        font-weight:bold;
        width:220px;
        top:100px;
        left:50%;
        margin-top:50px;
        margin-left:-110px;
        @media (min-width:1000px){
            margin-top:100px;
        }
        
`
export const addr = styled.p `
        
        color:white;
        text-align:center;
        font-size:18px;
        font-weight:bold;
        
        
`
export const contact_us = styled.div `
    padding-left:60px;
    padding-right:60px;
    @media (min-width:1000px){
            display:flex;
            padding-left:10%;
            padding-right:10%;
        }
`

export const find_us = styled.div `
    
    @media (min-width:1000px){
            width:33%;
    }
    
`
export const heading = styled.p `
    font-size:30px;
    margin-top:60px;
    margin-bottom:60px;
    
`
export const text = styled.p `
    width:90%;
    line-height:30px;
`
export const contact_details = styled.div `
    display:flex;
    margin:30px 0;
    
`
export const logo =styled.div `
    margin-right:20px;
    padding-top:3px;
`
export const div =styled.div `
`
export const sub_heading =styled.div `
    margin-bottom:10px;
    font-weight:bold;
`
export const data =styled.div `
`
export const link =styled.a `
    text-decoration:none;
    color:#44b272;
`
export const name_email =styled.div `
    @media (min-width:1000px){
            display:flex;
            justify-content:center;
        }
`
export const contact_form =styled.form `
    /* box-sizing:border-box; */
    
    margin-bottom:60px;
    @media (min-width:1000px){
            width:65%;
    }
`
export const input =styled.input `
    display:block;
    width:100%;
    margin:10px 0;
    height:50px;
    padding-left:20px;
    font-size:18px;
    border-radius:5px;
    border-color:#a0a0a0;
    
    &::placeholder{
        
        font-size:18px;
    }
    &:nth-child(2){
        @media (min-width:1000px){
            transform:translate(16px, 0);
        }
    }
    
`
export const dualInput = styled(input)`
    width:49%;
`

export const inputarea =styled.textarea `
    display:block;
    width:100%;
    margin:20px 0;
    min-width:100%;
    height:150px;
    padding-left:20px;
    padding-top:20px;
    &::placeholder{
        
        font-size:18px;
    }
`
export const button = styled.button `
    width:200px;
    height:60px;
    border-radius:30px;
    font-size:18px;
    color:#44b272;
    border-color:#44b272;
    font-weight:bold;
    background:white;
    &:hover{
        color:white;
        background:#44b272;
        cursor: pointer;
    }
    `