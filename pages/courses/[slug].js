import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";

function CoursesPage() {
  const router = useRouter();

  //   console.log(router);

  console.log(router.query.slug);

  return (
    <Layout>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push("/")}>Redirect to Home Page</button>
    </Layout>
  );
}

export default CoursesPage;
