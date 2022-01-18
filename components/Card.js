import styled from "styled-components";

const Card = styled.section`
  width: 300px;
  flex: ${(props) => props.searchBox ? "none" : "0 0 25%"};
  background-color: ${(props) => (props.color)};
  margin: ${(props) => (props.margin)};
  padding: 10px 15px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  text-align: center;

  & > p {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 300px;
      flex: ${(props) => props.searchBox ? "none" : "0 0 50%"};
    }
    & > p {
      font-size: 14px;
    }
  }
`;

export default Card;
