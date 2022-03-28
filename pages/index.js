import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import Arushi from "./assets/about.jpg";
import { AiOutlineLinkedin, AiFillInstagram } from "react-icons/ai";
import { Button, Card } from "antd";
import ProjectCard from "../components/ProjectCard";
import WorkCard from "../components/WorkCard";

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

      <div className={styles.projContainer} id="projects">
        <h1>Projects</h1>
        <div className={styles.projCardController}>
          <ProjectCard
            colorProps={"#E7E2FF"}
            textColorProps={"#9E89FF"}
            title={"Indusby"}
            description={"A portal to enable reuse of Industrial by-products"}
            link={"https://sexedify.co/"}
          />
          <ProjectCard
            colorProps={"#FFD9DE"}
            textColorProps={"#FF8596"}
            title={"SexEdify"}
            description={"The ultimate safe-haven for sex-education"}
            link={"https://indusby.netlify.app/"}
          />
          <ProjectCard
            colorProps={"#DEEDFF"}
            textColorProps={"#257CE4"}
            title={"Svayam"}
            description={"An ecommerce portal for Self-help groups."}
            link={"https://svayam.vercel.app/"}
          />
        </div>
      </div>

      <div className={styles.workContainer} id="work">
        <h1>Work Experience</h1>
        <WorkCard
          colorProps={"#E7E2FF"}
          textColorProps={"#9E89FF"}
          title={"Fiedra"}
          date={"Web Developer (Oct 2021 - Jan 2022)"}
          description={
            "The first, consolidated bug bounty platform in India, BugBase is a student run startup that provides a SaaS platform to companies for to host their bug bounties, be it public or private. Companies can list down their application for a bug bounty, and a stream of hackers would be going through rigorous tests to find a bug in the platform, for a certain reward."
          }
          link={"https://fiedra.com/"}
        />
        <WorkCard
          colorProps={"#FFD9DE"}
          textColorProps={"#FF8596"}
          title={"Incepthink"}
          date={"Web Developer (Oct 2021 - Jan 2022)"}
          description={
            "The first, consolidated bug bounty platform in India, BugBase is a student run startup that provides a SaaS platform to companies for to host their bug bounties, be it public or private. Companies can list down their application for a bug bounty, and a stream of hackers would be going through rigorous tests to find a bug in the platform, for a certain reward."
          }
          link={"https://https://www.incepthink.com/"}
        />
        <WorkCard
          colorProps={"#DEEDFF"}
          textColorProps={"#257CE4"}
          title={"BugBase"}
          date={"Web Developer (Oct 2021 - Jan 2022)"}
          description={
            "The first, consolidated bug bounty platform in India, BugBase is a student run startup that provides a SaaS platform to companies for to host their bug bounties, be it public or private. Companies can list down their application for a bug bounty, and a stream of hackers would be going through rigorous tests to find a bug in the platform, for a certain reward."
          }
          link={"https://bugbase.in/"}
        />
      </div>

      <div className={styles.clubContainer}>
        <h1>Student-lead Clubs</h1>
        <div className={styles.clubCard}>
          <div className={styles.clubImage}></div>
          <div className={styles.clubTextController}>
            <h1 className={styles.clubHeading}>GirlScript Manipal</h1>
            <p className={styles.clubDescription}>
              The first, consolidated bug bounty platform in India, BugBase is a
              student run startup that provides a SaaS platform to companies for
            </p>
            <div className={styles.controller}>
              <Link href="/">
                <AiOutlineLinkedin className={styles.link} />
              </Link>
              <Link href="/">
                <AiFillInstagram className={styles.link} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.awards}>
        <h3 className={styles.awardsHeading}>
          I am also an avid avid debater, love talking and formal forms of
          argumentation! Here are some of my debating achievements :)
        </h3>
        <div className={styles.awardsController}>
          <div>
            <ul>
              <li>Novice Finalist at RVCE Debate Tournament</li>
              <li>Novice Finalist at RVCE Debate Tournament</li>
              <li>Novice Finalist at RVCE Debate Tournament</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Novice Finalist at RVCE Debate Tournament</li>
              <li>Novice Finalist at RVCE Debate Tournament</li>
              <li>Novice Finalist at RVCE Debate Tournament</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
