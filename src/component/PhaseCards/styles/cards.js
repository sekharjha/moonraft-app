import styled from 'styled-components';

export const Container = styled.div`
  padding-left:200px;
  padding-right:200px;
  color: #192A56  ;
  padding:100px;
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
  margin-left: 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4,auto);
  grid-gap: 30px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2,auto);
  }
  @media (max-width: 756px) {
    grid-template-columns: repeat(1,auto);
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
      border-bottom: 1px solid #e0e0e0;
      width: 100%;
      padding-bottom:25px;
      text-align: left;
      margin: 58px 0 48px 0;
      font-size: 28px;
      margin-top: 80px !important;
`
