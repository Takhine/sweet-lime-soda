import React from "react";
import Footer from "./Footer";
import "static/styles/main.scss";

const Layout = (props) => {
  return (
    <React.Fragment>
      {props.children}
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
