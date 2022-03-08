import HomeCard from "../components/HomeCard";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import about from "../components/assets/about.jpg";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <HomeCard />

        {/* About Section */}
        <div className={styles.aboutSection}>
          <h1>About Me</h1>
          <div className={styles.aboutController}>
            <div className={styles.aboutImage}>
              <Image src={about} alt='cute pic of me'/>
            </div>
              <p>
                I am a sophomore at MIT, Manipal majoring in Information
                Technology. My interests in tech are centered around 
                <span> Application and Web Development</span> and any tool that equips me with the
                ability to create impactful solutions. I write too! and talk! A
                LOT. I`m a feminist through and through and find the purpose in the cause (bleh)
                <br/>
                <div className={styles.skills}>Skills</div>
                <div className={styles.skillsController}>
                  <h6>HTML</h6>
                  <h6>CSS</h6>
                  <h6>Javascript</h6>
                  <h6>React</h6>
                  <h6>Next</h6>
                  <h6>Redux</h6>
                  <h6>Ionic</h6>
                  <h6>C++</h6>
                  <h6>Java</h6>
                  <h6>Python</h6>

                </div>
              </p>
          </div>
        </div>
      <Projects/>
      </div>
    </>
  );
}
