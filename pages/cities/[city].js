import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Button from "../../components/Button";
import TransformUnits from "../../utils/transformUnits";
import DayOfWeek from "../../utils/DayOfWeek";
import GetHour from "../../utils/GetHour";

const City = ({ weather }) => {
  const { list } = weather;

  if (weather.cod.toString() !== "200") {
    return <p>Error</p>;
  }

  return (
    <div>
      <div>
        <Input />
      </div>
      <Container>
        <Link href="/" passHref>
          <Button>Volver al inicio</Button>
        </Link>
      </Container>
      <Title>{weather.city.name + ", " + weather.city.country}</Title>
      <Container>
        {list.map((c) => {
          if (
            GetHour(c.dt_txt) != "00:00:00" &&
            GetHour(c.dt_txt) != "06:00:00" &&
            GetHour(c.dt_txt) != "12:00:00" &&
            GetHour(c.dt_txt) != "18:00:00"
          ) {
            return null;
          }
          return (
            <Card key={c.dt} color="#666cfa" margin="10px 15px">
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
              <p>Moisture percentage: {c.main.humidity}%</p>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default City;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${params.city}&appid=${process.env.API_KEY}`
  );
  const data = await response.json();

  return {
    props: { weather: data },
  };
};
