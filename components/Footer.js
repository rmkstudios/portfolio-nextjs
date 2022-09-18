import mainstyles from "../styles/Main.module.css";
import Image from "next/image";
import Heart from "../public/heart.png";

const Footer = () => {
  return (
    <div className={mainstyles.footer}>
      Developed with love in Next.JS{" "}
      <span className={mainstyles.heart}>
        <Image src={Heart} width={10} height={10} alt="Heart" />
      </span>
    </div>
  );
};

export default Footer;
