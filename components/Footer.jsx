import Link from "next/link";
import React from "react";
import { AiOutlineLinkedin, AiFillInstagram } from "react-icons/ai";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footContainer}>
      <div className={styles.footMenu}>
        <h1>Mail me: Arushi.gandhi@gmail.com</h1>
        <Link href="https://in.linkedin.com/in/arushi-gandhi">
          <AiOutlineLinkedin className={styles.link} />
        </Link>
        <Link href="https://www.instagram.com/arushi.gandhi/">
          <AiFillInstagram className={styles.link} />
        </Link>
      </div>
      <div className={styles.footMenu}>
        <Link href="#projects">Projects</Link>
        <Link href="#work">Work</Link>
        <Link href="https://thesilentgeeks.com/">
          <a target="_blank">Blog</a>
        </Link>
      </div>
    </div>
  );
}
