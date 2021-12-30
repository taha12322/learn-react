import React from "react";

import Navbar from "../Navigation/Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Layout.scss";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main className="content">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
