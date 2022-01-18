import styled from "styled-components";

const P = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: #000;

  @media screen and (max-width: 768px) {
    & {
      font-size: ${(props) => props.rFontSize};
    }
  }
`;

export default P;
