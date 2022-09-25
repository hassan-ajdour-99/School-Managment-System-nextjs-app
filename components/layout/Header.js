import React from "react";
import Link from "next/link";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link href="/">
          <h2> CELTA Academy </h2>
        </Link>
      </div>
      <div className={classes.list}>
        <ul>
          <Link href="/courses">
            <li> Courses </li>
          </Link>
          <Link href="/courses">
            <li> Courses </li>
          </Link>
          <Link href="/courses">
            <li> Courses </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
