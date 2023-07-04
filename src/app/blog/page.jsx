import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getPosts() {
  const response = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 50 },
  });

  const data = response.json();

  if (!response.ok) {
    return [];
  }

  return data;
}

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post, idx) => (
        <Link href={`/blog/${post._id}`} key={idx}>
          <div className={styles.content}>
            <div className={styles.item}>
              <h1 className={styles.title}>{post.title}</h1>
              <article className={styles.article}>{post.description}</article>
            </div>
            <div className={styles.item}>
              <Image
                src={post.image}
                width={200}
                height={150}
                alt="image"
                className={styles.image}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
