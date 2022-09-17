import GreenCurve from "./GreenCurve.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <GreenCurve />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
