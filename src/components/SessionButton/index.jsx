"use client";
import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./sessionbutton.module.css";

const SessionButton = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    function verifySession() {
      if (session.status === "authenticated") {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }

    verifySession();
  }, []);

  async function handleLogin() {
    if (session.status === "authenticated") {
      signOut();
      setLoggedIn(false);
    } else {
      router.push("dashboard/login");
    }
  }

  return (
    <button className={styles.button} onClick={handleLogin}>
      {loggedIn ? "Logout" : "Login"}
    </button>
  );
};

export default SessionButton;
