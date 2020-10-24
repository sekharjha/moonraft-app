import styled from 'styled-components';

export const Container = styled.div`
  color: #192A56  ;
  padding:60px;
  @media (max-width: 1000px) {
    padding:40px;
  }
`;
export const SubRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));;
  grid-gap: 0px;

  @media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1600px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 40px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
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
