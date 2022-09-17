import Link from "next/link";
import styles from "/styles/Posts.module.css";
import { BsArrowLeftShort } from "react-icons/bs";

const BackToPortfolio = () => {
  return (
    <Link href="/">
      <div className={styles.back}>
        <BsArrowLeftShort size={40} />
        <div className={styles.backText}>Back To Portfolio</div>
      </div>
    </Link>
  );
};

export default BackToPortfolio;
