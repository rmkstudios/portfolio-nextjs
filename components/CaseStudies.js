import mainstyles from "../styles/Main.module.css";
import styles from "../styles/CaseStudies.module.css";

const CaseStudies = () => {
  return (
    <div className={mainstyles.wrapper}>
      <h2>Marketing Case Studies</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          Growing a community from 0 - 200,000 in 6 months and going viral Read
          About It
        </div>
        <div className={styles.card}>
          Becoming one of Host Gator's top affiliates through organic search
          traffic
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
