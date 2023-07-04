import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title: "Contact - Winter Next.JS Example",
  description: "No description was provided",
};

const Contact = () => {
  return (
    <div>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill={true} className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="E-mail" className={styles.input} />
          <textarea
            type="text"
            placeholder="Message"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" title="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
