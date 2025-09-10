import Head from "next/head";

export default function Home() {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Head>
        <title>Arushi Gandhi</title>
        <meta
          name="description"
          content="Personal website of Arushi Gandhi"
        />
      </Head>
      <div style={{ marginTop: "2rem" }}>
        {/* <div>
          <Image src="/arushi.jpeg" alt="arushi" width={1800} height={1800} />
        </div> */}
        <div>
          <img src={"/arushi.jpeg"} alt="arushi" style={{ width: "100px", height: "100px" }}/>
          <h1>   </h1>
          <img src={"/8.png"} alt="arushi" style={{ width: "192px", height: "108px" }}/>
          <h1>About Me</h1>
          <p>
            Hi, I&apos;m <b>Arushi Gandhi</b>. I&apos;m the founder and CEO of <b>Ressl AI</b>, where we&apos;re building AI agents for Salesforce customisation and deployment.
            <></>
            I split my time between San Francisco and Bangalore.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2>Places I&apos;ve Worked At</h2>
        <ul>
          <li>
            <b>Fiedra</b> – Frontend Development Intern (Oct 2021 - Jan 2022)
          </li>
          <li>
            <b>Incepthink</b> – Web Development Intern (Feb 2022 - May 2022)
          </li>
          <li>
            <b>BugBase</b> – Project Manager (Dec 2021 - Sep 2022)
          </li>
          <li>
            <b>FreeStand</b> – Full Stack Development Intern (Sept 2022 - Feb 2023)
          </li>
          <li>
            <b>Microsoft</b> – SWE Intern (June 2023 - July 2023)
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <b>Indusby</b>: A portal to enable reuse of industrial by-products
          </li>
          <li>
            <b>SexEdify</b>: A haven for safe learning and conversation about sex-ed
          </li>
          <li>
            <b>Svayam</b>: An ecommerce portal for Self-help groups
          </li>
          <li>
            <b>Analysa</b>: A data analytics platform for the automobile industry
          </li>
          <li>
            <b>INREM Portal</b>: An application for the INREM NGO to promote water quality
          </li>
          <li>
            <b>Nina</b>: A women-focussed network promoting investing practices
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2>Positions of Responsibility</h2>
        <ul>
          <li>
            <b>GirlScript &lt;/&gt;</b> – Founding Team and Development Lead
          </li>
          <li>
            <b>Dorm Room Startup Club</b> – Co-founder
          </li>
          <li>
            <b>Fundinc</b> – Founder
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2>Places I&apos;ve Visited</h2>
        <p>
          I love travelling and exploring new places. Here are a few places I&apos;ve been to:
        </p>
        <div>
          <div>
            <img src={"/assets/travel/andaman.png"} alt="andaman" style={{ width: "100px", height: "100px" }}/>
            <h3>Andaman</h3>
          </div>
          <div>
            <img  src={"/assets/travel/greece.png"}  alt="greece" style={{ width: "100px", height: "100px" }}/>
            <h3>Greece</h3>
          </div>
          <div>
            <img  src={"/assets/travel/switzerland.png"}  alt="swiss" style={{ width: "100px", height: "100px" }}/>
            <h3>Switzerland</h3>
          </div>
          <div>
            <h3>Paris</h3>
          </div>
          <div>
            <h3>London</h3>
          </div>
          <div>
            <h3>United States</h3>
          </div>
          <div>
            <h3>Amsterdam</h3>
          </div>
          <div>
            <h3>Belgium</h3>
          </div>
          <div>
            <h3>Japan</h3>
          </div>
          <div>
            <h3>Bali</h3>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
