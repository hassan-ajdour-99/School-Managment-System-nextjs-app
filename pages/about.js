import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";

function about() {
  return (
    <Layout>
      about
      <Link href="/"> home </Link>
    </Layout>
  );
}

export default about;
