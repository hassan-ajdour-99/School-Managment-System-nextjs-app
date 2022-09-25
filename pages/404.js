import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import classes from "../styles/404.module.css";

function PageNotFound() {
  return (
    <Layout>
      <div className={classes.container}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4> Sorry, There's nothing Here . </h4>
        <Link href="/">
          <p> Go Back Home </p>
        </Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;
