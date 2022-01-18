import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import Card from "../../components/Card";
import CurrentWeatherCard from "../../components/CurrentWeatherCard";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Button from "../../components/Button";
import P from "../../components/P";
import ErrorPage from "../../components/ErrorPage";
import TransformUnits from "../../utils/transformUnits";
import DayOfWeek from "../../utils/DayOfWeek";
import GetHour from "../../utils/GetHour";

const City = ({ weather, currentWeather }) => {
  const { list } = weather;
  const router = useRouter();

  if (weather.cod.toString() !== "200") {
    try {
      router.push(`/errors/${weather.cod}`);
      return null;
    } catch (e) {
      return <ErrorPage code="404" />;
    }
  }

  return (
    <div>
      <div>
        <Head>
          <title>Weather app NextJS</title>
        </Head>
      </div>
      <Link href="/" passHref>
        <Button>Back to home</Button>
      </Link>
      <div>
        <Input />
      </div>
      <Container>
        <CurrentWeatherCard margin="10px 15px" color="#7db9f0">
          <div>
            <Title>{weather.city.name + ", " + weather.city.country}</Title>
            <P fontSize="28px" fontWeight="700" rFontSize="22px">
              {TransformUnits(currentWeather.main.temp)}
            </P>
            <P fontSize="20px" fontWeight="700" rFontSize="18px">
              humidity: {currentWeather.main.humidity}%
            </P>
            <P fontSize="20px" fontWeight="700" rFontSize="18px">
              wind: {Math.round(currentWeather.wind.speed * 3.6 * 100) / 100}{" "}
              km/h
            </P>
          </div>
          <div>
            <Image
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              width={120}
              height={120}
              alt=""
            />
            <P fontSize="24px" fontWeight="700" rFontSize="20px">
              {currentWeather.weather[0].description}
            </P>
          </div>
        </CurrentWeatherCard>
      </Container>
      <Container>
        {list.map((c) => (
          <Card key={c.dt} color="#7db9f0" margin="10px 15px">
            <p>{DayOfWeek(c.dt_txt)}</p>
            <p>{GetHour(c.dt_txt)}</p>
            <Image
              src={`http://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`}
              width={100}
              height={100}
              alt=""
            />
            <p>{c.weather[0].description}</p>
            <p>{TransformUnits(c.main.temp)}</p>
            <p>humidity: {c.main.humidity}%</p>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default City;

export const getServerSideProps = async ({ params }) => {
  const dailyResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${params.city}&appid=${process.env.API_KEY}`
  );
  const currentResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=${process.env.API_KEY}`
  );
  const dailyData = await dailyResponse.json();
  const currentData = await currentResponse.json();
  console.log(currentData);
  return {
    props: { weather: dailyData, currentWeather: currentData },
  };
};
