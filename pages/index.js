import Head from "next/head";
import styles from "../styles/Home.module.css";
import Profile from "../components/Profile";
import Portfolio from "../components/Portfolio";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan Krysiak - Frontend Developer & UX Designer</title>
        <meta
          name="description"
          content="Web development portfolio of Ryan Krysiak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Profile />
        <Portfolio />
        <CaseStudies />
        <Contact />
      </main>
    </div>
  );
}
