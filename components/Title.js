import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;

  @media screen and (max-width: 768px) {
    & {
      font-size: 32px;
    }
  }
`;

export default Title;
