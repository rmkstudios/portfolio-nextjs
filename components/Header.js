import Link from "next/link";
import mainstyles from "../styles/Main.module.css";
import styles from "../styles/Header.module.css";
import { FaLinkedin, FaRegFileAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className={mainstyles.wrapper}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.name}>Ryan Krysiak</div>
            <div className={styles.tagline}>
              Frontend Developer & UX Designer
            </div>
          </div>
          <div className={styles.menu}>
            <Link href="https://www.linkedin.com/in/ryan-krysiak/">
              <a className={styles.menuItem} target="_blank">
                <FaLinkedin className={styles.icon} /> LinkedIn
              </a>
            </Link>
            <Link href="#">
              <a className={styles.menuItem} target="_blank">
                <FaRegFileAlt className={styles.icon} /> Resume / CV
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
