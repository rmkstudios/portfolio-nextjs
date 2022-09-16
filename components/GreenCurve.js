import styles from "../styles/GreenCurve.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.greenBackground}></div>
      <svg
        className={styles.greenCurve}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#161a2a"
          fill-opacity="1"
          d="M0,192L120,197.3C240,203,480,213,720,213.3C960,213,1200,203,1320,197.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Header;
