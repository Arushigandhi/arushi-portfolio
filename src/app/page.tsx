import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./blog/content";

const places: { name: string; photo?: string }[] = [
  { name: "Andaman", photo: "/assets/travel/andaman.png" },
  { name: "Greece", photo: "/assets/travel/greece.png" },
  { name: "Switzerland", photo: "/assets/travel/switzerland.png" },
  { name: "Paris", photo: "/assets/travel/paris.jpg" },
  { name: "London", photo: "/assets/travel/london.jpg" },
  { name: "New York", photo: "/assets/travel/new-york.jpg" },
  { name: "San Francisco", photo: "/assets/travel/san-francisco.jpg" },
  { name: "Amsterdam", photo: "/assets/travel/amsterdam.jpg" },
  { name: "Belgium", photo: "/assets/travel/belgium.jpg" },
  { name: "Japan", photo: "/assets/travel/japan.jpg" },
  { name: "Bali", photo: "/assets/travel/bali.jpg" },
  { name: "Goa", photo: "/assets/travel/goa.jpg" },
];

export default function Home() {
  return (
    <main className="page">
      <header className="intro">
        <Image
          className="portrait"
          src="/arushi-speaking.jpg"
          alt="Arushi Gandhi"
          width={80}
          height={80}
          priority
        />
        <h1>Arushi Gandhi</h1>
        <p>
          Co-founder and CEO at <a href="https://newmeasure.ai"><b>Newmeasure</b></a> (formerly Ressl). YC W26.
        </p>
        <p className="muted">Splitting my time between San Francisco and Bangalore.</p>
        <nav aria-label="Find me online">
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/arushi-gandhi">LinkedIn</a></li>
            <li><a href="mailto:arushi.gandhi@gmail.com">Email</a></li>
            <li><a href="https://x.com/arushi_ressl">X</a></li>
            <li><a href="https://github.com/Arushigandhi">GitHub</a></li>
            <li><a href="https://www.instagram.com/arushi.gandhi">Instagram</a></li>
          </ul>
        </nav>
      </header>

      <section aria-labelledby="writing">
        <h2 id="writing">Writing</h2>
        <ul className="writing-list">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog#${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="work">
        <h2 id="work">Places I&apos;ve worked</h2>
        <ul className="experience-list">
          <li>
            <div><b>Microsoft</b>: SWE Intern</div>
            <span className="dates">Jun – Jul 2023</span>
          </li>
          <li>
            <div><b>FreeStand</b>: Full Stack Development Intern</div>
            <span className="dates">Sep 2022 – Feb 2023</span>
          </li>
          <li>
            <div><b>BugBase</b>: Founder&apos;s Office Intern</div>
            <span className="dates">Dec 2021 – Sep 2022</span>
          </li>
          <li>
            <div><b>Incepthink</b>: Web Development Intern</div>
            <span className="dates">Feb – May 2022</span>
          </li>
          <li>
            <div><b>Fiedra</b>: Frontend Development Intern</div>
            <span className="dates">Oct 2021 – Jan 2022</span>
          </li>
        </ul>
      </section>

      <section aria-labelledby="projects">
        <h2 id="projects">Things I&apos;ve built</h2>
        <ul className="plain-list">
          <li><b>Fundinc</b>: AI agents for private capital firms.</li>
          <li><b>Indusby</b>: A portal to enable reuse of industrial by-products.</li>
          <li><b>SexEdify</b>: A haven for safe learning and conversation about sex-ed.</li>
          <li><b>Svayam</b>: An ecommerce portal for self-help groups.</li>
          <li><b>Analysa</b>: A data analytics platform for the automobile industry.</li>
          <li><b>INREM Portal</b>: An application for the INREM NGO to promote water quality.</li>
          <li><b>Nina</b>: A women-focused network promoting investing practices.</li>
        </ul>
      </section>

      <section aria-labelledby="community">
        <h2 id="community">A few other things</h2>
        <ul className="plain-list">
          <li><b>GirlScript &lt;/&gt;</b>: Founding Team and Development Lead.</li>
          <li><b>Dorm Room Startup Club</b>: Co-founder.</li>
        </ul>
      </section>

      <section aria-labelledby="travel">
        <h2 id="travel">Places I&apos;ve visited</h2>
        <div className="travel-photos">
          {places.map((place) => place.photo ? (
            <figure key={place.name}>
              <Image
                src={place.photo}
                alt={`A travel photo from ${place.name}`}
                width={128}
                height={128}
                sizes="(max-width: 600px) min(128px, calc((100vw - 88px) / 3)), 128px"
              />
              <figcaption>{place.name}</figcaption>
            </figure>
          ) : null)}
        </div>
        {places.some((place) => !place.photo) && (
          <p className="other-places">
            Also: {places.filter((place) => !place.photo).map((place) => place.name).join(", ")}.
          </p>
        )}
      </section>
    </main>
  );
}
