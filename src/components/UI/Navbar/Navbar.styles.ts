import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: lightgray;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
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