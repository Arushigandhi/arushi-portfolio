import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import Arushi from "./assets/about.jpg";
import { AiOutlineLinkedin, AiFillInstagram } from "react-icons/ai";
import { Button, Card } from "antd";
import ProjectCard from "../components/ProjectCard";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";

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
              <Link href="https://in.linkedin.com/in/arushi-gandhi">
                <AiOutlineLinkedin className={styles.link} />
              </Link>
              <Link href="https://www.instagram.com/arushi.gandhi/">
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
            description={"A haven for safe learning and conversation about sex-ed"}
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
          date={"Web Development Intern (Oct 2021 - Jan 2022)"}
          description={
            "Fiedra is a social networking platform, for long-form content. Fiedra allows writers to post blog content on their website, follow other writers and reach a wide network through their writing. I worked on developing the web application akin to the deployed iOS app, using <b>Next.js</b>, <b>Redux</b> and <b>Parse Server</b> for a duration of three months."
          }
          link={"https://fiedra.com/"}
        />
        <WorkCard
          colorProps={"#FFD9DE"}
          textColorProps={"#FF8596"}
          title={"Incepthink"}
          date={"Web Development Intern (Feb 2022 - Ongoing)"}
          description={
            "Incepthink works towards redefining the limits of blockchain to add utility to the world of NFTs through exisiting and upcoming projects. I worked on contributing to different projects under the Incepthink umbrella and developed the company website which has an integrated <b>NFT Minter</b> and blogs, using <b>Next.js</b>, <b>Ethers.js</b>, <b>IPFS</b> and <b>Ghost Content API</b>."
          }
          link={"https://www.incepthink.com/"}
        />
        <WorkCard
          colorProps={"#DEEDFF"}
          textColorProps={"#257CE4"}
          title={"BugBase"}
          date={"Project Manager (Dec 2021 - Ongoing)"}
          description={
            "BugBase is a managed marketplace of ethical hackers which facilitates startups and enterprises to setup bug bounty programs. I am responsible for the day-to-day functioning of the various departments in the company and efficient communication between them. I have also contributed towards migrating the codebase from <b>React</b> to <b>Next.js</b>."
          }
          link={"https://bugbase.in/"}
        />
      </div>

      {/* <div className={styles.clubContainer}>
        <h1>Positions of Responsibilities</h1>
        <div className={styles.clubCard}>
          <div className={styles.clubImage}></div>
          <div className={styles.clubTextController}>
            <h1 className={styles.clubHeading}>GirlScript Manipal</h1>
            <p className={styles.clubDescription}>
              We co-founded Girlscript Manipal with the aim to broaden diversity
              in tech and bring value to inclusion. As a team, we understoof the
              barriers and intimidation that stood between wanting to learn a
              skill and mastering it. As the development lead, I`ve successfully
              conducted workshops, domain bootcamps and mentorship programs in
              the field of webdev.
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
      </div> */}

      {/* <div className={styles.awards}>
        <h3 className={styles.awardsHeading}>
          We co-founded Girlscript Manipal with the aim to broaden diversity in
          tech and bring value to inclusion. As a team, we understoof the
          barriers and intimidation that stood between wanting to learn a skill
          and mastering it. As the development lead, I`ve successfully conducted
          workshops, domain bootcamps and mentorship programs in the field of
          webdev.
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
      </div> */}
      <Footer/>
    </>
  );
}
