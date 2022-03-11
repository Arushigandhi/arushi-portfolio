import Image from "next/image";
import React from "react";
import styles from "./styles/projects.module.scss";
import sexedify from "./assets/sexedify.png";
import indusby from "./assets/indusby.png";
import Link from "next/link";
import {
  RiExternalLinkLine,
  RiYoutubeLine,
  RiGithubLine,
  RiFilePpt2Line
} from "react-icons/ri";

export default function Projects() {
  return (
    <div className={styles.projContainer}>
      <h1>Projects</h1>
      <div className={styles.projCard}>
        <div className={styles.projImage}>
          <Image src={sexedify} />
        </div>
        <div className={styles.projTextCOntroller}>
          <h2>SexEdify.co</h2>
          <p>
            There isn`t any way to know about things like sexuality, gender
            orientation, body positivity in a manner that the recipient of the
            knowledge feels safe. Futhermore, with the stigma and disbelief
            around periods, especially in more marginalised parts of our
            country, SexEdify can do wonders! These places might not let their
            women talk about periods but there sure is the Internet. Now, the
            internet can be a very powerful and tricky tool here. With SexEdify,
            we plan to harvest that power of networking to create the ONE
            ABSOLUTE forum for all things Sex-Ed!`
          </p>
          <div className={styles.projIcons}>
            <Link href="https://sexedify.co/">
              <RiExternalLinkLine className={styles.ws} />
            </Link>
            <Link href="https://www.youtube.com/watch?v=sEiazx2JjmI&t=2s">
              <RiYoutubeLine className={styles.yt} />
            </Link>
            <Link href="https://github.com/Arushigandhi/SexEdify">
              <RiGithubLine className={styles.gh} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.projCard}>
        <div className={styles.projImage}>
          <Image src={indusby} />
        </div>
        <div className={styles.projTextCOntroller}>
          <h2>Indusby</h2>
          <p>
            Indusby is an app that facilitates the direct usage of industrial
            by-products that get generated in tremendous quantities, so much so
            that their effective utilization has become crucial. These
            industries can enlist pick-up of this waste on the platform, which
            the client can then acquire and make use of.
            <br />
            With the worsening climate crisis, one can be sure of government
            mandates in the near future making it mandatory to
            use a good percentage of by-products in
            their manufacture. Importance will be given to green materials. Where would contractors
            of the construction business go to acquire said waste to meet their
            needs? The answer is Indusby!
          </p>
          <div className={styles.projIcons}>
            <Link href="https://indusby.netlify.app/">
              <RiExternalLinkLine className={styles.ws} />
            </Link>
            <Link href="https://www.canva.com/design/DAEwbTpVAaM/VcRitcAEdPzP6S6-UDmB-w/view?utm_content=DAEwbTpVAaM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
              <RiFilePpt2Line className={styles.yt} />
            </Link>
            <Link href="https://github.com/Arushigandhi/Indusby">
              <RiGithubLine className={styles.gh} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
