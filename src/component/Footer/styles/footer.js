import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background:#202020;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const SubRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2,auto);
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
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 40px;

 
`;
export const Link = styled.a`
  color:  rgb(153, 153, 153);
  margin-bottom: 4px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const ParagraphDiv = styled.div`
  width:100%;
  `

export const FaceBookButton = styled.button`
      padding-left:20px;
      position: relative;
      background-color: #3b5998;
      width:250px;
      height:40px;
      top: 4px;
      border-radius:20px;
      color:white;
      text-decoration:none;
      display:inline-block;
      border:none;
    &:hover {
      color: #020208;
      background-color:white;
      transition: 200ms ease-in;
  }   
`  