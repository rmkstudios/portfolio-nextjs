import Head from "next/head";
import { useRouter } from "next/router";

const Title = () => {
  const router = useRouter();
  const { title } = router.query; // this destructures what's in the [] brackets and makes it a variable
  return (
    <>
      <Head>
        <title>{title} - Ryan Krysiak's Development Portfolio</title>
        <meta
          name="description"
          content="Web development portfolio of Ryan Krysiak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Title: {title}</div>
    </>
  );
};

export default Title;
