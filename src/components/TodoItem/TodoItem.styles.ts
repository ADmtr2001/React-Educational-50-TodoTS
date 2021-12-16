import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
  height: 30px;
  border: 2px solid cornflowerblue;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  
  :hover {
    background-color: lightblue;
  }
`;