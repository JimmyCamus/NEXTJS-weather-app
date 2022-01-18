import styled from "styled-components";

const CurrentWeatherCard = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #96dfeb;
  width: 70%;
  text-align: center;
  margin: 50px 0;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    & {
      width: 95%;
    }
  }
`;

export default CurrentWeatherCard;
