import styled from 'styled-components';

export const Container = styled.div`
  color: #192A56 ;
  background-color:#f8f8f8;
  padding-bottom:60px;
  @media (max-width: 1000px) {
    padding:40px;
  }
`;

export const Wrapper = styled.div`
    background-color:#f8f8f8;
    display: flex;
    flex-direction:column;
    justify-content: center;
    max-width: 1600px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-row: repeat(2,auto);
  grid-gap: 0px;

  @media (max-width: 1000px) {
    grid-template-row: repeat(1,auto);
    grid-gap:0px;
  }
`
export const Image = styled.img`
    width:100%;
    @media (max-width: 1000px) {
    width:100%
  }
`
export const Content = styled.div`
    width:50%;
    @media (max-width: 1000px) {
    width:100%
  }
`
export const Heading = styled.h2`
    font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display:block;
    font-size:40px;
    font-weight:600;
    padding-top:20%;
    padding-left:18%;
    letter-spacing:-0.5px;
    line-height:56px;
    text-size-adjust:100%;
`
export const Pcontainer = styled.p`
    font-family:"Lato", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif ;
    padding-top:30px;
    padding-right:100px;
    padding-left:18%;
    font-size:20px;
    font-stretch:expanded;
    line-height:34px;
    color: #828282;
`

