import Image from "next/image";
import Link from "next/link";
import { blogPost } from "./blog/content";

export default function Home() {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <div style={{ marginTop: "2rem" }}>
        <Image
          src="/arushi.jpeg"
          alt="Arushi Gandhi"
          width={100}
          height={100}
        />
        <h1>Arushi Gandhi</h1>
        <p>
          <b>CEO and Co-founder of Ressl AI</b>
        </p>
        <p>Backed by YC W26</p>
        <p>San Francisco, US / Bangalore, IN</p>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2>Blog</h2>
        <h3>
          <Link href="/blog">{blogPost.title}</Link>
        </h3>
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
            <b>FreeStand</b> – Full Stack Development Intern (Sept 2022 - Feb
            2023)
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
            <b>SexEdify</b>: A haven for safe learning and conversation about
            sex-ed
          </li>
          <li>
            <b>Svayam</b>: An ecommerce portal for Self-help groups
          </li>
          <li>
            <b>Analysa</b>: A data analytics platform for the automobile
            industry
          </li>
          <li>
            <b>INREM Portal</b>: An application for the INREM NGO to promote
            water quality
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
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "72px" }}>
            <Image
              src="/assets/travel/andaman.png"
              alt="Andaman"
              width={72}
              height={72}
            />
            <h3 style={{ fontSize: "1rem", margin: "0.4rem 0 0" }}>
              Andaman
            </h3>
          </div>
          <div style={{ width: "72px" }}>
            <Image
              src="/assets/travel/greece.png"
              alt="Greece"
              width={72}
              height={72}
            />
            <h3 style={{ fontSize: "1rem", margin: "0.4rem 0 0" }}>
              Greece
            </h3>
          </div>
          <div style={{ width: "88px" }}>
            <Image
              src="/assets/travel/switzerland.png"
              alt="Switzerland"
              width={72}
              height={72}
            />
            <h3 style={{ fontSize: "1rem", margin: "0.4rem 0 0" }}>
              Switzerland
            </h3>
          </div>
          <div style={{ width: "72px" }}>
            <h3 style={{ fontSize: "1rem", margin: 0 }}>Paris</h3>
          </div>
          <div style={{ width: "72px" }}>
            <h3 style={{ fontSize: "1rem", margin: 0 }}>London</h3>
          </div>
          <div style={{ width: "88px" }}>
            <h3 style={{ fontSize: "1rem", margin: 0 }}>United States</h3>
          </div>
          <div style={{ width: "88px" }}>
            <h3 style={{ fontSize: "1rem", margin: 0 }}>Amsterdam</h3>
          </div>
          <div style={{ width: "72px" }}>
            <h3 style={{ fontSize: "1rem", margin: 0 }}>Belgium</h3>
          </div>
          <div style={{ width: "72px" }}>
            <h3 style={{ fontSize: "1rem", margin: 0 }}>Japan</h3>
          </div>
          <div style={{ width: "72px" }}>
            <h3 style={{ fontSize: "1rem", margin: 0 }}>Bali</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
