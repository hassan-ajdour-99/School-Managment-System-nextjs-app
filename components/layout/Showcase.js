import classes from "./Showcase.module.css";
import Image from "next/image";

function Showcase() {
  return (
    <div classNam={classes.container}>
      <div classNam={classes.partA}>
        <h2> Learning Today , Leading Tomorrow .</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          quidem omnis labore harum odit id! Laboriosam, laborum porro! Eos
          temporibus quaerat tempora excepturi ex. Magnam est beatae doloremque
          nobis doloribus!
        </p>
        <button> Sign Up </button>
      </div>
      <div classNam={classes.partB}>{/*  */}</div>
    </div>
  );
}

export default Showcase;
