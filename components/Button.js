import styled from "styled-components";

const Button = styled.button`
  background-color: #96dfeb;
  color: #000;
  border: solid 1px #000;
  padding: 2px 5px;
  border-radius: 4px;
  margin: 25px 10px;
  &:hover {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export default Button;
