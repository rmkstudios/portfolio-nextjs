import mainstyles from "../../styles/Main.module.css";
import styles from "../../styles/Posts.module.css";
import Head from "next/head";
import { FaShare, FaGithub } from "react-icons/fa";
import BackToPortfolio from "../../components/BackToPortfolio";
import Link from "next/link";
import Image from "next/image";
import Thumbnail from "/public/thumbnail-weird-alerts.png";

const WeirdAlerts = () => {
  return (
    <>
      <Head>
        <title>Weird Alerts - Ryan Krysiak Development Portfolio</title>
        <meta
          name="description"
          content="Web development portfolio of Ryan Krysiak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainstyles.wrapper}>
        <div className={styles.whiteBackground}>
          <h1>Weird Alerts: About The Development</h1>
          <div className={styles.tagline}>
            A real-time crypto currency tracker that doesn&apos;t overwhelm you
            with data!
          </div>
          <div className={styles.content}>
            <div className={styles.buttons}>
              <Link href="https://github.com/rmkstudios/weird-alerts">
                <a target="_blank">
                  <FaGithub className={styles.icon} /> GitHub
                </a>
              </Link>
              <Link href="http://weirdalerts.com/">
                <a className={styles.visit} target="_blank">
                  <FaShare className={styles.icon} /> Visit The Site
                </a>
              </Link>
            </div>
            <div className={styles.thumbnail}>
              <Image src={Thumbnail} alt="Weird Alerts" />
            </div>
            <h2>Development Specs</h2>
            <ul>
              <li>
                This React app was coded from the ground up in HTML5/CSS3. Some
                button/tag/menu elements were used from the Chakra UI library as
                well.
              </li>
              <li>
                The crypto currency data updates in real time. It comes from a
                fantastic API provided by CoinGecko.
              </li>
              <li>The site is also coded to be fully mobile responsive.</li>
            </ul>
            <h2>Design Choices</h2>
            <ul>
              <li>
                The layout changed quite a bit from the initial Figma layout
                design. Part of the development process!
              </li>
              <li>
                Several palettes were worn before landing on the current one. I
                wanted to go against the financial-grain with a light,
                ocean-style palette.
              </li>
              <li>
                Deciding how much information to display was also an important
                design decision. Just because an API offers a lot of data
                points, doesn&apos;t mean that each one serves the purpose of
                the site. I narrowed it down to key data points to reduce
                consumer overwhelm.
              </li>
            </ul>
            <h2>Overcoming Challenges</h2>
            <ul>
              <li>
                During development, I encountered a bug that really had me
                bewildered. It was odd behavior stemming from 2 sources: an
                object that was being referenced instead of duplicated and the
                async nature of state.
              </li>
              <li>
                This resulted in me being able to refresh the page and get
                varying outputs depending upon the amount of time it took for
                the data to fetch.
              </li>
              <li>
                To overcome the problem, I went back to basics and figured out
                what fundamental concept I was misunderstanding. But once I
                switched to a spread syntax and added a proper loading state, I
                was back in business!
              </li>
            </ul>
            <h2>Future Improvements</h2>
            <ul>
              <li>
                The next reasonable jump would be to incorporate historical
                price charts. I can pull in additional data from CoinGecko, then
                display it using a chart library like Recharts and ChartJS.
              </li>
              <li>
                A search function would likely bring the site to the next level.
                With this small dataset, I could write an auto-complete function
                that would check against their search in real time (using state)
                and display matching coins that the site currently displays.
              </li>
            </ul>
            <BackToPortfolio />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeirdAlerts;
