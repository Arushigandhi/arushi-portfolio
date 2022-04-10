import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/svayam.module.scss";
import Svayam from "./assets/projects/svayamFigma.png";
import Footer from "../components/Footer";

export default function svayam() {
  return (
    <>
      <NavBar />
      <div className={styles.projContainer}>
        <h1>Svayam</h1>
        <Divider className={styles.divider} />
        <iframe
        className={styles.iframe}
          width="950"
          height="534"
          src="https://www.youtube.com/embed/maI5PTvtnmY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.about}>
          <div>
            <h1>About Svayam</h1>
            <Divider className={styles.divider} />
          </div>
          <div className={styles.aboutController}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={styles.imageWrapper}>
              <Image src={Svayam} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.aboutIcons}>
          <Link href="https://github.com/Arushigandhi/hackerare-sih-2022">
            <a target="_blank">
              <span className={styles.link}>GitHub Repository</span>
            </a>
          </Link>
          <Link href="https://svayam.vercel.app/">
            <a target="_blank">
              <span className={styles.link}>Website Demo</span>
            </a>
          </Link>
        </div>
        {/* <div className={styles.about}>

        <h1>My Contribution</h1>
          <Divider className={styles.divider} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
