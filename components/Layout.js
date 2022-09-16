import Header from "./Header.js";
import GreenCurve from "./GreenCurve.js";

const Layout = ({ children }) => {
  return (
    <>
      <GreenCurve />
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
