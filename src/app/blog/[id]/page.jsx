import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getPost(postId) {
  const response = await fetch(`http://localhost:3000/api/posts/${postId}/`, {
    next: { revalidate: 50 },
  });

  if (!response.ok) {
    return notFound();
  }
  const data = await response.json();
  return data;
}

export async function generateMetadata({ params }) {
  const data = await getPost(params.id);
  return {
    title: data.title,
    description: data.description,
  };
}

const Post = async ({ params }) => {
  const data = await getPost(params.id);
  const { title, description, image } = data;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{title}</h1>
        </div>
        <div className={styles.image}>
          <Image src={image} alt={title} width={200} height={200} />
        </div>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Post;
