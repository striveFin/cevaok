import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";


const HeroComponent = () => {
  return (
    <div className={styles.heroImageContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/painters.jpg"
          layout="fill"
          alt="Hero Image"
          objectFit="cover"
        />
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>Creating a Unique and Fresh Look</h1>
          <h2 style={{ color: 'white', fontSize: "25px" }}>Free Quotes</h2>

          <div>
          <a href="tel:+7930097259" className={`contactButton ${styles.contactButton}`}>Call Joseph</a>
<button className={`contactButton ${styles.contactButton}`}>Contact Us</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
