import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { API_URL } from "../config/index";

export default function Home({ courses }) {
  console.log(courses);

  return (
    <Layout>
      <Link href="/about">about</Link>
      <h1> Our Course </h1>
      {courses.length === 0 && <p> Not Courses </p>}
      {courses.map((course) => (
        <div key={course.id}>
          <p> {course.name} </p>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/courses/course`);

  const courses = await res.json();

  // console.log(courses);

  return {
    props: {
      courses,
    },
  };
}
