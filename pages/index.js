import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <h1> Home </h1>
      <Link href="/about">about</Link>
    </Layout>
  );
}
