import Link from "next/link";
import Title from "./Title";
import Button from "./Button";
import Container from "./Container";

const ErrorPage = ({ code }) => {
  return (
    <div>
      <Title>Error {code}</Title>
      <Container>
        <Link href="/">
          <a>
            <Button>Click here to back home</Button>
          </a>
        </Link>
      </Container>
    </div>
  );
};

export default ErrorPage;
