import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/sexedify.module.scss";
import Sexedify from "./assets/projects/sexedifyFigma.png";
import Footer from "../components/Footer";
import Head from "next/head";

export default function sexedify() {
  return (
    <>
      <Head>
        <title>Arushi Gandhi | Projects</title>
        <meta
          name="description"
          content="Hey, I'm Arushi Gandhi, a developer who enjoys building products of pertinence. "
        />
      </Head>
      <NavBar />
      <div className={styles.projContainer}>
        <h1>SexEdify</h1>
        <Divider className={styles.divider} />
        <iframe
          className={styles.iframe}
          width="950"
          height="534"
          src="https://www.youtube.com/embed/sEiazx2JjmI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.about}>
          <div>
            <h1>About SexEdify</h1>
            <Divider className={styles.divider} />
          </div>
          <div className={styles.aboutController}>
            <p>
              SexEdify is a portal to enable teenagers and young adults to have
              a safe space on the internet to learn more about the natural
              processes of growing up without any discomfort or stigma.
              <br />
              <br />
              We developed this portal for the NIT-R Hackathon in 36 hours using
              React and GraphQL and came in first overall.
            </p>
            <div className={styles.imageWrapper}>
              <Image src={Sexedify} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.aboutIcons}>
          <Link href="https://github.com/Arushigandhi/SexEdify">
            <a target="_blank">
              <span className={styles.link}>GitHub Repository</span>
            </a>
          </Link>
          <Link href="https://sexedify.co/">
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
