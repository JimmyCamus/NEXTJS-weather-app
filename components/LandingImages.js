import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Card from "./Card";
import LosAngeles from "../public/images/LosAngeles.jpg";
import Berlin from "../public/images/Berlin.jpg";
import Santiago from "../public/images/Santiago.jpg";
import Tokyo from "../public/images/Tokyo.jpg";

const places = [
  {
    name: "Santiago",
    image: Santiago,
    url: "/cities/santiago,cl",
  },
  {
    name: "LosAngeles",
    image: LosAngeles,
    url: "/cities/los%20angeles,us",
  },
  {
    name: "Berlin",
    image: Berlin,
    url: "/cities/berlin,de",
  },
  {
    name: "Tokyo",
    image: Tokyo,
    url: "/cities/tokyo,jp",
  },
];

const LandingImages = () => {
  return (
    <div>
      <Container>
        {places.map((city, index) => (
          <div key={index}>
            <Link href={city.url}>
              <a>
                <Card margin="90px 15px" color="#eee">
                  <Image src={city.image} alt="" width="500px" height="500px" />
                  <h2>{city.name}</h2>
                </Card>
              </a>
            </Link>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default LandingImages;
