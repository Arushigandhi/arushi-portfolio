import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles/navbar.module.scss";
import Arushi from "./assets/arushi.svg"
import Resume from "./assets/Resume.png"
import { Button } from "antd";
import { HiOutlineDownload } from "react-icons/hi";

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
        <Image src={Arushi} alt="arushi" width={25}/>
        {/* <Button className={styles.navBtn}> Resume</Button> */}
        <div className={styles.navImage}>
        <Image src={Resume} alt="resume"/>
        </div>
    </div>
  );
}
