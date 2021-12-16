import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  
  a {
    width: 100px;
    height: 30px;
    background-color: lightblue;
    color: black;
    border: 2px solid cornflowerblue;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;

    :hover {
      color: cornflowerblue;
    }
  }
`;