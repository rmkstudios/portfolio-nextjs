import mainstyles from "../styles/Main.module.css";
import styles from "../styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "../public/logo-weirdalerts.png";
import Logo2 from "../public/logo-thecompanyofhouseplants.png";
import Logo3 from "../public/logo-simpleprtracker.png";
import Arrow from "../public/arrow.png";
import {
  FaShare,
  FaGithub,
  FaReact,
  FaRegClone,
  FaGripVertical,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className={mainstyles.wrapper}>
        <h2 className={mainstyles.white}>
          Featured Projects{" "}
          <span className={styles.arrow}>
            <Image src={Arrow} alt="Arrow" />
          </span>
        </h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.gradient}>
              <Link href="./projects/weird-alerts">
                <div className={styles.logo}>
                  <Image src={Logo1} alt="Weird Alerts" />
                </div>
              </Link>
            </div>
            <div className={styles.tags}>
              <div>
                <FaReact className={styles.icon} /> React
              </div>
              <div>
                <FaRegClone className={styles.icon} /> API Integration
              </div>
            </div>
            <Link href="./projects/weird-alerts">
              <div className={styles.aboutButton}>About The Project</div>
            </Link>
            <div className={styles.bottomButtons}>
              <Link href="https://github.com/rmkstudios/weird-alerts">
                <a target="_blank">
                  <FaGithub className={styles.icon} /> GitHub
                </a>
              </Link>
              <Link href="http://weirdalerts.com">
                <a target="_blank">
                  <FaShare className={styles.icon} /> Visit The Site
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.gradient}>
              <div className={styles.logo}>
                <Link href="./projects/the-company-of-house-plants">
                  <Image src={Logo2} alt="The Company of House Plants" />
                </Link>
              </div>
            </div>
            <div className={styles.tags}>
              <div>
                <FaReact className={styles.icon} /> React
              </div>
              <div>
                <FaGripVertical className={styles.icon} /> Local JSON
              </div>
            </div>
            <Link href="./projects/the-company-of-house-plants">
              <div className={styles.aboutButton}>About The Project</div>
            </Link>
            <div className={styles.bottomButtons}>
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
          </div>
          <div className={styles.card}>
            <div className={styles.gradient}>
              <div className={styles.logo}>
                <Link href="./projects/simple-pr-tracker">
                  <Image src={Logo3} alt="Simple PR Tracker" />
                </Link>
              </div>
            </div>
            <div className={styles.tags}>
              <div>
                <FaReact className={styles.icon} /> React
              </div>
              <div>
                <SiFirebase className={styles.icon} /> Firebase
              </div>
            </div>
            <Link href="./projects/simple-pr-tracker">
              <div className={styles.aboutButton}>About The Project</div>
            </Link>
            <div className={styles.bottomButtons}>
              <Link href="https://github.com/rmkstudios/simple-pr-tracker">
                <a target="_blank">
                  <FaGithub className={styles.icon} /> GitHub
                </a>
              </Link>
              <Link href="https://simpleprtracker.backedbyryan.com/">
                <a target="_blank">
                  <FaShare className={styles.icon} /> Visit The Site
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
