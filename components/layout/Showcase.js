import classes from "./Showcase.module.css";
import Image from "next/image";

function Showcase() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.partA}>
          <h2> Learning Today , Leading Tomorrow .</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            quidem omnis labore harum odit id! Laboriosam, laborum porro! Eos
            temporibus quaerat tempora excepturi ex. Magnam est beatae
            doloremque nobis doloribus!
          </p>
          <button> Sign Up </button>
        </div>
        <div className={classes.partB}>
          <Image
            src="/images/03.png"
            alt="showcase-image"
            width="600"
            height="400"
            className={classes.img}
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
