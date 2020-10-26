import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    flex-direction:row;
    width:180px;
    align-items:center;
    
`
export const Button = styled.button`
    border-radius:50%;
    width:20px;
    height:20px;
    border:3px solid #f4f4f4;
    background-color:${props => props.color};
`
export const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
`
export const MainButton = styled.button`
    width:40px;
    height:40px;
    border:none;
    background-color:#f4f4f4;
`