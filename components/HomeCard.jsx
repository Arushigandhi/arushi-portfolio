import Link from "next/link";
import React from "react";
import styles from "./styles/homecard.module.scss";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export default function HomeCard() {
  return (
    <div className={styles.container}>
      <h1>
        Hi there, I am <br />
        <span>Arushi Gandhi. </span>
      </h1>
      <h2>
        I am a <span>developer</span> focused on building accessible,
        human-centered products{" "}
      </h2>
      <div className={styles.dividerController}>
        <div className={styles.divider}></div>
        <a>
          <AiFillInstagram className={styles.ig}/>
        </a>
        <a>
          <AiFillLinkedin className={styles.ld}/>
        </a>
        <a>
          <AiOutlineGithub className={styles.gh}/>
        </a>
      </div>
    </div>
  );
}
