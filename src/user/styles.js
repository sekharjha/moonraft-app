import styled from 'styled-components'
export const Container = styled.div`
    display:flex;
    flex-direction:row;
`
export const ImageContainer  = styled.div`
    width:50%;
    height: 100vh;
`
export const FormContainer = styled.div`
    width:50%;
    height:100vh;
    display: flex;
    justify-content:center;
    flex-direction:column; 
    
` 
export const Image = styled.img`
        max-width: 100%;
        height: 100%;
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    margin:20px;
`
export const Input =styled.input.attrs({ 
    type: 'text'
  })`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`
export const ButtonContainer = styled.div`
    diplay:flex;
    align-items:center;
`
export const Button = styled.button`
    color:#438ec4;
    font-size: 1em;
    margin: 1em;
    padding: 0.15em 1em;
    border: 2px solid #438ec4;
    border-radius: 3px;
    background-color:#ffffff
`
export const Heading = styled.h2`
    text-align:center; 
    color:#438ec4; 
`