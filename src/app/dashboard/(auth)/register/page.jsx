"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const [name, email, password] = [
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
    ];

    console.log("bf", name, email, password);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } else {
        throw new Error();
      }
    } catch (e) {
      setErr(true);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          className={styles.input}
          required
        />
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
        <button className={styles.button}>Register</button>
      </form>
      {err && <div className={styles.errorbox}>Something Went Wrong!</div>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
