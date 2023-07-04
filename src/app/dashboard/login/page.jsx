"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const [err, setErr] = useState(false);

  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const [email, password] = [event.target[0].value, event.target[1].value];

    console.log(email, password);
    signIn("credentials", { email, password });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email   "
          className={styles.input}
          required
        />
        <input
          type="text"
          password="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      {err && <div className={styles.errorbox}>Something Went Wrong!</div>}
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
