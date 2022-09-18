import mainstyles from "../styles/Main.module.css";
import styles from "../styles/CaseStudies.module.css";
import Link from "next/link";
import Image from "next/image";
import CaseStudy1 from "../public/case-study-1.png";
import CaseStudy2 from "../public/case-study-2.png";

const CaseStudies = () => {
  return (
    <div className={mainstyles.wrapper}>
      <h2>Marketing Case Studies</h2>
      <div className={styles.grid}>
        <Link href="./social-media-case-study">
          <div className={styles.card}>
            <Image
              src={CaseStudy1}
              className={styles.image}
              alt="Maximizing Social Engagement"
            />
            <div className={styles.title}>
              Growing a community from 0 - 200,000 in 6 months with omnipresent
              marketing
            </div>
          </div>
        </Link>
        <Link href="./seo-case-study">
          <div className={styles.card}>
            <Image
              src={CaseStudy2}
              className={styles.image}
              alt="Maximizing Organic Search Traffic"
            />
            <div className={styles.title}>
              Becoming one of Host Gator&apos;s top affiliates through organic
              search traffic
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudies;
