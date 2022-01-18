import Head from "next/head";
import Input from "../components/Input";
import LandingImages from "../components/LandingImage";

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Weather app NextJS</title>
        </Head>
      </div>

      <div>
        <Input />
      </div>

      <div>
        <LandingImages />
      </div>
    </div>
  );
}
