import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.scss";
import one from "./assets/goa.jpeg";
import two from "./assets/beach.jpeg";
import three from "./assets/nindhi.jpeg";
import { Row } from "antd";

export default function love() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image src={one} alt="arushi" width={700} height={550} />
        </div>
        <div className={styles.aboutDescription}>
          <h1>Dear Mr Aryamann Ningombam,</h1>
          <h2>
            I love you. And I really miss you stupid bitch. You are my favourite
            person on earth and I could talk to you for 7 janam , round figure,
            still won`t be enough. Meet me asap. (I shall update this easter egg
            section soon.)
          </h2>
        </div>
      </div>
    </>
  );
}
