import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/indusby.module.scss";
import Indusby from "./assets/projects/indusbyFigma.png";
import Footer from "../components/Footer";

export default function svayam() {
  return (
    <>
      <NavBar />
      <div className={styles.projContainer}>
        <h1>Indusby</h1>
        <Divider className={styles.divider} />
        <div className={styles.iframeWrapper}>
          <iframe
            className={styles.iframe}
            loading="lazy"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEwbTpVAaM&#x2F;view?embed"
            allowFullScreen="allowfullscreen"
            allow="fullscreen"
          ></iframe>
        </div>
        <a
        className={styles.iframeLink}
          href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEwbTpVAaM&#x2F;view?utm_content=DAEwbTpVAaM&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
          target="_blank"
          rel="noreferrer"
        >
          Click here to view the Indusby presentation
        </a>
        <div className={styles.about}>
          <div>
            <h1>About Indusby</h1>
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
              <Image src={Indusby} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.aboutIcons}>
          <Link href="https://github.com/Arushigandhi/Indusby">
            <a target="_blank">
              <span className={styles.link}>GitHub Repository</span>
            </a>
          </Link>
          <Link href="https://indusby.netlify.app">
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
