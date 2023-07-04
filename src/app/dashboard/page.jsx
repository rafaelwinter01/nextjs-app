"use client";
import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoadind, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const response = await fetch(
  //       `https://api.slingacademy.com/v1/sample-data/photos/${postId}`,
  //       {
  //         next: { revalidate: 50 },
  //       }
  //     );

  //     if (!response.ok) {
  //       setError(true);
  //     }

  //     const data = await response.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  const session = useSession();
  console.log(session.status);
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  async function handleSubmit(event) {
    event.preventDefault();

    const [title, description, image, content] = [
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
      event.target[3].value,
    ];

    try {
      await fetch("api/posts/", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      event.target[0].value =
        event.target[1].value =
        event.target[2].value =
        event.target[3].value =
          "";
      mutate();
    } catch (e) {
      console.error(error.message);
    }
  }

  async function handleDelete(postId) {
    try {
      await fetch(`api/posts/${postId}`, {
        method: "DELETE",
      });
      mutate();
    } catch (e) {
      console.error(error.message);
    }
  }

  if (session.status === "loading") {
    return <p>Loading</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data?.map((item, index) => (
            <div key={item._id} className={styles.postcontainer}>
              <div className={styles.imgContainer}>
                <Image src={item.image} width={150} height={75} alt="" />
              </div>
              <div className="title">{item.title}</div>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(item._id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <form className={styles.newpost} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input className={styles.input} placeholder="Title" />
          <input className={styles.input} placeholder="Description" />
          <input className={styles.input} placeholder="Image" />
          <textarea
            className={styles.text}
            placeholder="Content"
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
