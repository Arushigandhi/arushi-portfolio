import Image from "next/image";
import Link from "next/link";
import React from "react";
import Arushi from "./assets/icon.svg";
import styles from "../styles/navbar.module.scss";

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div>
        <Link href="/">
          <div className={styles.imgNav}>
            <Image
              src={Arushi}
              alt="arushi"
              width={40}
            />
          </div>
        </Link>
      </div>
      <div className={styles.navMenu}>
        <Link href="#projects">Projects</Link>
        <Link href="#work">Work</Link>
        <Link href="https://thesilentgeeks.com/">
          <a target="_blank">Blog</a>
        </Link>
      </div>
    </div>
  );
}
