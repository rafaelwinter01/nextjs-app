import Link from "next/link";
import React from "react";

import styles from "./navbar.module.css";
import DarkModeToogle from "../DarkModeToogle";
import SessionButton from "../SessionButton";

const links = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Winter
      </Link>
      <div className={styles.links}>
        <DarkModeToogle />
        {links.map(({ id, title, url }) => (
          <Link id={id} href={url} className={styles.link}>
            {title}
          </Link>
        ))}
      </div>
      <SessionButton />
    </div>
  );
};

export default NavBar;
