import styled from 'styled-components'

export const info = styled.div `
    display:flex;
    
    
    margin-left:6%;

    @media (max-width:768px){
        flex-wrap:wrap;
    }
    
`
export const info_items = styled.p `
    margin:auto 15px;
    color:#a0a0a0;
    
`
export const icons = styled.div `
    display:flex;
    margin-left:auto;
    margin-right:6%;
`
export const facebook =  styled.div `
    
    padding:18px 22px;
    color:#a0a0a0;
    

    &:hover{

        background:${props=>props.back};
        background:#4a6d9d;
        color:white;
    }

`
export const pinterest =  styled.div `
    
    padding:18px 20px;
    color:#a0a0a0;

    &:hover{

        background:${props=>props.back};
        background:#cc242a;
        color:white;
    }

`
export const twitter =  styled.div `
    
    padding:18px;
    color:#a0a0a0;

    &:hover{

        background:${props=>props.back};
        background:#3bc1ed;
        color:white;
    }

`
export const dribble =  styled.div `
    
    padding:18px;
    color:#a0a0a0;

    &:hover{

        background:${props=>props.back};
        background:#ef5a92;
        color:white;
    }

`
export const google =  styled.div `
    
    padding:18px;
    color:#a0a0a0;

    &:hover{

        background:${props=>props.back};
        background:#d53925;
        color:white;
    }

`
export const header =  styled.div `
    display:flex;
    background: #f4f4f4;
    @media (max-width:768px){
        flex-wrap:wrap;
    }

`
export const Button = styled.button`
    background-color:#e60000;
    color:white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: none;
    border-radius: 3px;
   &:hover{
       color:#e60000;
       background-color:white;
       border: 1px solid #e60000;
   } 
`