import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const HeroComponent = () => {
  return (
    <div className={styles.heroImageContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/painters.jpeg"
          layout="fill"
          alt="Hero Image"
          objectFit="cover"
        />
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>Creating a Unique and Fresh Look</h1>
          <h2 className={styles.heroText}>Free Quotes</h2>

          <div className={styles.contacts}>
            <a
              href="tel:+447930097259"
              className={`contactButton ${styles.contactButton}`}
            >
              Call Joseph
            </a>
            <button className={`contactButton ${styles.contactButton}`}>
              <Link href="/pages/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
