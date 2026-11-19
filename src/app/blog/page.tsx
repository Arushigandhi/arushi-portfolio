import Link from "next/link";
import { blogPosts } from "./content";

export default function Blog() {
  return (
    <main className="page">
      <header>
        <Link className="back-link" href="/">← Arushi Gandhi</Link>
        <h1>Writing</h1>
      </header>

      {blogPosts.map((post) => (
        <article
          id={post.id}
          key={post.id}
          className="blog-post"
        >
          <h2>{post.title}</h2>
          {post.content.map((block, index) =>
            block.type === "list" ? (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={index}>
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
    </main>
  );
}
