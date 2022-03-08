import Image from "next/image";
import React from "react";
import styles from "./styles/projects.module.scss";
import sexedify from "./assets/sexedify.png";
import { Timeline } from "antd";
import "antd/dist/antd.css";
import { RiExternalLinkLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";

export default function Projects() {
  return (
    <div className={styles.projContainer}>
      <h1>Projects</h1>
      <div className={styles.projCard}>
        <div className={styles.projImage}>
          <Image src={sexedify} />
        </div>
        <div>

        <div>

        <h2>SexEdify</h2>
        <p>
          There isn`t any way to know about things like sexuality, gender
          orientation, body positivity in a manner that the recipient of the
          knowledge feels safe. Futhermore, with the stigma and disbelief around
          periods, especially in more marginalised parts of our country,
          SexEdify can do wonders! These places might not let their women talk
          about periods but there sure is the Internet. Now, the internet can be
          a very powerful and tricky tool here. With SexEdify, we plan to
          harvest that power of networking to create the ONE ABSOLUTE forum for
          all things Sex-Ed!`
        </p>
        </div>
        <div className={styles.projIcons} >
        <RiExternalLinkLine/>
        <RiYoutubeLine/>
        <RiGithubLine/>
        </div>
        </div>
      </div>
    </div>
  );
}
