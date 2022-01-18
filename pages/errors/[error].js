import ErrorPage from "../../components/ErrorPage";

const Error = ({ code }) => {
  return (
    <div>
      <ErrorPage code={code} />
    </div>
  );
};

export default Error;

export const getServerSideProps = ({ params }) => {
  return {
    props: { code: params.error },
  };
};
