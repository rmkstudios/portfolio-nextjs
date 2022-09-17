import Link from "next/link";
import mainstyles from "../styles/Main.module.css";
import styles from "../styles/Header.module.css";
import { FaLinkedin, FaRegFileAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className={mainstyles.wrapper}>
        <div className={styles.header}>
          <Link href="/">
            <a className={styles.logo}>
              <div className={styles.name}>Ryan Krysiak</div>
              <div className={styles.tagline}>
                Frontend Developer & UX Designer
              </div>
            </a>
          </Link>
          <div className={styles.menu}>
            <Link href="https://www.linkedin.com/in/ryan-krysiak/">
              <a className={styles.menuItem} target="_blank">
                <FaLinkedin className={styles.icon} />
                <span className={styles.mobileHidden}> LinkedIn</span>
              </a>
            </Link>
            <Link href="/resume.pdf">
              <a className={styles.menuHighlight} target="_blank">
                <FaRegFileAlt className={styles.icon} />
                <span className={styles.mobileHidden}> Resume / CV</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
