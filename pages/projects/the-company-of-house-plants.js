import mainstyles from "../../styles/Main.module.css";
import styles from "../../styles/Posts.module.css";
import Head from "next/head";
import BackToPortfolio from "../../components/BackToPortfolio";
import Link from "next/link";
import { FaShare, FaGithub } from "react-icons/fa";

const TheCompanyOfHousePlants = () => {
  return (
    <>
      <Head>
        <title>
          The Company of House Plants - Ryan Krysiak Development Portfolio
        </title>
        <meta
          name="description"
          content="Web development portfolio of Ryan Krysiak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainstyles.wrapper}>
        <div className={styles.whiteBackground}>
          <h1>The Company of House Plants: About The Development</h1>
          <div className={styles.tagline}>
            Explore new species of house plants and learn how to care for them!
          </div>
          <div className={styles.content}>
            <div className={styles.buttons}>
              <Link href="https://github.com/rmkstudios/the-company-of-house-plants">
                <a target="_blank">
                  <FaGithub className={styles.icon} /> GitHub
                </a>
              </Link>
              <Link href="https://houseplants.backedbyryan.com/">
                <a target="_blank">
                  <FaShare className={styles.icon} /> Visit The Site
                </a>
              </Link>
            </div>
            <h2>Development Specs</h2>
            <ul>
              <li>
                The data on this site was manually compiled into a local JSON
                file to serving as a makeshift API call. This means adding new
                entries and pages is as simple as adding a new entry to the JSON
                file. No code necessary!
              </li>
              <li>
                95% of the HTML/CSS was written from scratch. The other 5% came
                from the Chakra UI Library for elements like the mobile dropdown
                menu. And the homepage scroll animations are from the React
                Animation on Scroll library.
              </li>
            </ul>
            <h2>Design Choices</h2>
            <ul>
              <li>
                I believe that being a good designer is often more about
                curation than creation. For the layout of this site, I mixed
                inspiration from multiple clean and elegant designs in the wild.
              </li>
              <li>
                The color palette for this site was focused around natural/green
                colors. The goal was to feel clean and open through the white
                and natural through the green.
              </li>
            </ul>
            <h2>Overcoming Challenges</h2>
            <ul>
              <li>
                Compression was an important piece of the puzzle for this site.
                I was able to reduce image and video sizes by 75% to speed up
                load times - but it still could improve quite a bit from here.
              </li>
              <li>
                This was the first time I worked with a local JSON file as
                opposed to accessing one through an external API call. For a
                simple site like this, I think it turned out to be a great
                solution for a local/static database.
              </li>
            </ul>
            <h2>Future Improvements</h2>
            <ul>
              <li>
                Beyond compression, taking the time to standardize image sizes
                could have a significat impact on both performance and design
                consistency.
              </li>
              <li>
                The explore page could be greatly improved with the addition of
                pagination and a simple sort functionality by plant type
                (foliage/flowering).
              </li>
            </ul>
            <BackToPortfolio />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheCompanyOfHousePlants;
