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
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1600px;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0;
`;
export const ButtonRow = styled.div`
  padding-left:14%;
  width:50%;
  display:grid;
  grid-template-columns: repeat(1,auto);
  grid-gap: 0px;
`
export const SearchRow = styled.div`
  padding-left:4%;
  width:100%;
  display:grid;
  grid-template-columns: repeat(1,auto);
  grid-gap: 0px;
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4,auto);
  grid-gap: 0px;

  @media (max-width: 1346px) {
    grid-template-columns: repeat(2,auto);
    grid-gap:0px;
  }
  @media(max-width:920px){
    grid-template-columns: repeat(1,auto);
    grid-gap:0px;
  }
`;
export const Link = styled.a`
  color:  rgb(153, 153, 153);
  margin-bottom: 4px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color:#44B272;
      transition: 200ms ease-in;
  }
`;
export const Title = styled.h3`
    text-align: center;
      margin: 58px 0 48px 0;
      font-size: 28px;
      margin-bottom: 35px !important;
      margin-top: 70px !important;
`
