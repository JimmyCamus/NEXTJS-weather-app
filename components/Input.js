import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import MyInput from "./MyInput";
import Card from "./Card";
import Container from "./Container";
import Li from "./Li";
import cities from "../lib/cities.json";

const Input = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const clearQuery = () => setQuery("");
    Router.events.on("routeChangeComplete", clearQuery);

    return () => {
      Router.events.off("routeChangeComplete", clearQuery);
    }
  }, []);

  const onChange = ({ target }) => {
    setQuery(target.value);

    let matchCities = [];

    if (target.value.length > 3) {
      for (let city of cities) {
        if (matchCities.length > 5) {
          break;
        }
        const match = city.name
          .toLowerCase()
          .startsWith(target.value.toLowerCase());

        if (!match) {
          continue;
        }

        matchCities.push(city);
      }
    }

    return setResults(matchCities);
  };

  return (
    <div>
      <Container>
        <MyInput
          placeholder="search a location"
          type="text"
          value={query}
          onChange={onChange}
        />
      </Container>
      {query.length > 3 && (
        <Container>
          <Card color="#eee" margin="5px 5px" searchBox={true}>
            {results.length > 0 ? (
              results.map((city, country) => (
                <Li key={city + country}>
                  <Link
                    href={`/cities/${city.name.toLowerCase()},${city.country.toLowerCase()}`}
                  >
                    <a>
                      {city.name}, {city.country}
                    </a>
                  </Link>
                  <hr />
                </Li>
              ))
            ) : (
              <Li>No results</Li>
            )}
          </Card>
        </Container>
      )}
    </div>
  );
};

export default Input;
