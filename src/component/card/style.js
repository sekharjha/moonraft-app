import styled from 'styled-components'
export const Icon = styled.i`
    font-size: 72px;
    line-height: 95px;
    position: absolute;
    left: 0;
    color:${props => props.color};
    &:hover {
        color:white
    }
`
export const CardBody = styled.div`
    flex: 1;
    background-color: #eeeeee;
    width:100%;
    height:100px;
    padding: 40px;
    &:hover {
     
      background-image:linear-gradient(${props => props.color},white,${props => props.color})
      transition: 200ms ease-in;
      color:white;
  };
        &:hover ${Icon} {
        color:white
        }

`
export const CardContent = styled.div`
    display: table;
    height: 100%;
    padding-left: 105px;
    position: relative;
    z-index: 20;
`
export const CardElement = styled.div`
    display: table-cell;
    vertical-align: middle;
`
