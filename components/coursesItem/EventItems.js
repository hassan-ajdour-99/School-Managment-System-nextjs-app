import React from "react";
import Image from "next/image";
import classes from "./EventItems.module.css";

function EventItems({ course }) {
  return (
    <div className={classes.container}>
      <div className={classes.courses}>
        <div></div>
      </div>
    </div>
  );
}

export default EventItems;
