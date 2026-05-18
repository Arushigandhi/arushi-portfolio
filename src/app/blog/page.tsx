import Link from "next/link";
import { blogPost } from "./content";

export default function Blog() {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <div style={{ marginTop: "2rem" }}>
        <p>
          <Link href="/">Back</Link>
        </p>
        <h1>{blogPost.title}</h1>
      </div>

      <article style={{ marginTop: "2rem" }}>
        {blogPost.content.map((block, index) =>
          block.type === "list" ? (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item} style={{ whiteSpace: "pre-line" }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p key={index} style={{ whiteSpace: "pre-line" }}>
              {block.text}
            </p>
          ),
        )}
        <p>
          <a href={blogPost.href} target="_blank" rel="noreferrer">
            Original post
          </a>
        </p>
      </article>
    </div>
  );
}
