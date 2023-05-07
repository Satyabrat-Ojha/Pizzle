import Image from "next/image";
import styles from "../styles/Featured.module.css";
import { useState } from "react";

const NavbarFeatured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index > 0 ? index - 1 : images.length - 1);
    } else {
      setIndex(index < images.length - 1 ? index + 1 : 0);
    }
  };
  // console.log(index);

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" fill style={{ objectFit: "contain" }} />
          </div>
        ))}
      </div>

      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default NavbarFeatured;
