import styled from 'styled-components'
import image from '../../Assets/Images/single-project-01-parallax.jpg'
export const header = styled.div`
    width: 100%;
    height:100vh;
    background: url(${image});
    background-position:center;
`
export const title = styled.p `
    font-size:36px;
    font-weight:bold;
    text-align:center;
    color:white;
    padding-top:500px;
    @media (min-width:780px) and (max-width:1200px){
        font-size:56px;
    }
    @media (min-width:1201px){
        font-size:76px;
        padding-top:450px;
    }
`

export const content = styled.div `
    @media (min-width:1000px){
        display:flex;
        justify-content:center;
        
    }
    padding-bottom:80px;
`
export const content1 = styled.div `
    @media (min-width:1000px){
        width:55%;
        min-width:550px;
        
        
    }
`
export const content2 = styled.div `
    margin-top:80px;
    @media (min-width:1000px){
        width:20%;
        min-width:300px;
        margin-top:100px;
        
        
    }
`

export const data = styled.div `
    margin:20px;
`
export const line = styled.div `
    height:1px;
    width:100%;
    background:#e8e8e8;
    margin-top:15px;
    margin-bottom:15px;
`

export const heading = styled.p `
    margin:40px 20px;
    font-size:26px;
    font-weight:bold;
`
export const text = styled.p `
     margin:20px;
    font-size:18px;
    line-height:35px;
    
`
export const data_field = styled.span `
   color:#9e9e9e;
    font-size:19px;
`
export const data_value = styled.span `
    
    font-size:19px;
`
export const button = styled.button `
    display:block;
    width:96%;
    height:60px;
    border-radius:30px;
    font-size:16px;
    color:#44b272;
    border-color:#44b272;
    font-weight:bold;
    background:white;
    margin-left:auto;
    margin-right:auto;
    &:hover{
        color:white;
        background:#44b272;
        cursor: pointer;
    }
`
export const grid = styled.div`
    @media (min-width:1200px){
        display:flex;
        height:640px;
        
    }
`
export const grid1 = styled.div`
    @media (min-width:1200px){
        display:flex;
        flex-direction:row-reverse;
        height:640px;
    }
`
export const field1 = styled.div`
    background-color:#f8f8f8;
    padding-top:70px;
    padding-bottom:80px;
    @media (min-width:1200px){
        width:50%;
        padding-top:160px;
    }
`
export const field2 = styled.img`
    width:100%;
    max-height:500px;
    @media (min-width:1200px){
        width:50%;
        max-height:640px;
    }
`
export const field3 = styled.div`
    background:#f8f8f8;
    @media (min-width:1200px){
        width:50%;
        height:640px;
    }
`
export const heading1 = styled.p`
    padding-left:50px;
    margin:0;
    margin-bottom:10px;
    font-size:30px;
    font-weight:bold;
    @media (min-width:1200px){
        font-size:50px;
        padding-left:120px;
        font-weight:500;
    }
`
export const text1 = styled.p`
    padding-left:50px;
    margin:0;
    padding-top:50px;
    line-height:26px;
    font-size:20px;
    @media (min-width:1200px){
        font-size:24px;
        padding-left:120px;
        line-height:32px;
        padding-right:260px;
        font-weight:250;
    }
`
export const cellgrid = styled.div `
    
    @media (min-width:1200px) {
        display:flex;
        
    }
`
export const cell = styled.div `
    padding-left:60px;
    padding-right:60px;
    padding-bottom:30px;
    padding-top:80px;
    @media (min-width:1200px) and (max-width:1444px) {
        padding-left:20px;
        padding-right:20px;
        padding-bottom:15px;
        padding-top:65px;
    }
    @media (min-width:1445px) {
        padding-left:40px;
        padding-right:40px;
        padding-bottom:15px;
        padding-top:70px;
    }
    
`
export const icon = styled.div `
    text-align:center;
    
`
export const heading2 = styled.div `
    text-align:center;
    padding-top:20px;
    font-size:22px;
    font-weight:500;
`
export const text2 = styled.p `
    text-align:center;
    font-size:18px;
    padding-top:10px;
    font-weight:300;
`