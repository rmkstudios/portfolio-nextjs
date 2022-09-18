import Head from "next/head";

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found!</title>
        <meta
          name="description"
          content="Web development portfolio of Ryan Krysiak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Uh oh, this page doesn&apos;t exist!</div>
    </>
  );
};

export default PageNotFound;
