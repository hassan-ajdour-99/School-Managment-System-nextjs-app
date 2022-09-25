import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";

function Layout(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title> {props.title} </title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{props.children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: " Celta Academy | Home",
  description: "Celta Academy , the best paltform for online courses",
  keywords: "courses, celta, academy,",
};

export default Layout;
