import mainstyles from "../styles/Main.module.css";
import styles from "../styles/Profile.module.css";
import Image from "next/image";
import Me from "../public/me-min.png";

const Profile = () => {
  return (
    <div className={mainstyles.wrapper}>
      <div className={styles.profile}>
        <div className={styles.photo}>
          <Image src={Me} alt="Ryan Krysiak" />
        </div>
        <div className={styles.calloutText}>
          <span className={styles.highlight}>Frontend Developer.</span> <br />
          10 years of digital
          <br /> marketing experience.
          <div className={styles.tags}>
            HTML, CSS, Javascript, ReactJS, NextJS, Typescript, Sass, Wordpress,
            Bootstrap, Figma, Storybook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
