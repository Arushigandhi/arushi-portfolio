import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import Arushi from "./assets/about.jpg";
import { AiOutlineLinkedin, AiFillInstagram } from "react-icons/ai";
import { Button } from "antd";
export default function Home() {
  return (
    <>
      <NavBar />

      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image src={Arushi} alt="arushi" width={1800} height={1800} />
        </div>
        <div className={styles.aboutDescription}>
          <h1>
            Hey, I’m Arushi Gandhi and I am a developer focused on building
            accessible, human-centered products.
          </h1>
          <h2>
            I am a sophomore at MIT, Manipal majoring in Information Technology.
            My interests in tech are centered around Application and Web
            Development and any tool that equips me with the ability to create
            impactful solutions. I write too! and talk! A LOT. I`m a feminist
            through and through and believe in channeling tech for the cause.
          </h2>
          <div className={styles.aboutIcons}>
            <div className={styles.controller}>
              <Link href="/">
                <AiOutlineLinkedin className={styles.link} />
              </Link>
              <Link href="/">
                <AiFillInstagram className={styles.link} />
              </Link>
            </div>
            <div className={styles.controller}>
                <Button className={styles.btn}>Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
