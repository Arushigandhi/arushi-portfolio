import Link from "next/link";
import { blogPosts } from "./content";

export default function Blog() {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <div style={{ marginTop: "2rem" }}>
        <p>
          <Link href="/">Back</Link>
        </p>
        <h1>Blog</h1>
      </div>

      {blogPosts.map((post, postIndex) => (
        <article
          id={post.id}
          key={post.id}
          style={{ marginTop: postIndex === 0 ? "2rem" : "4rem" }}
        >
          <h2>{post.title}</h2>
          {post.content.map((block, index) =>
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
          {post.href ? (
            <p>
              <a href={post.href} target="_blank" rel="noreferrer">
                Original post
              </a>
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
