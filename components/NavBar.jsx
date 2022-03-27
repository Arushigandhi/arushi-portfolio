import Image from "next/image";
import Link from "next/link";
import React from "react";
import Arushi from "./assets/icon.svg";
import styles from "../styles/navbar.module.scss";


export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div>
        <Image src={Arushi} alt="arushi" width={40} />
      </div>
      <div className={styles.navMenu}>
        <Link href="#projects">Projects</Link>
        <Link href="#work">Work</Link>
        <Link href="https://thesilentgeeks.com/">Blog</Link>
      </div>
    </div>
  );
}
