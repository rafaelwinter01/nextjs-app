import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          className={styles.img}
        />
        <h1 className={styles.imgText}>Who we are?</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.items}>
          <h1>Left Side</h1>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            expedita nobis amet quidem quam autem perspiciatis, et mollitia
            cupiditate? Sequi repellat atque distinctio amet culpa odio qui
            doloremque facere. Quaerat?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            amet voluptates, quis laboriosam magnam provident necessitatibus
            laborum autem porro rem minus quae distinctio placeat earum
            accusantium eaque asperiores! Sed, dicta.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            amet voluptates, quis laboriosam magnam provident necessitatibus
            laborum autem porro rem minus quae distinctio placeat earum
            accusantium eaque asperiores! Sed, dicta.
          </p>
        </div>
        <div className={styles.items}>
          <h1>Right Side</h1>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            expedita nobis amet quidem quam autem perspiciatis, et mollitia
            cupiditate? Sequi repellat atque distinctio amet culpa odio qui
            doloremque facere. Quaerat?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            amet voluptates, quis laboriosam magnam provident necessitatibus
            laborum autem porro rem minus quae distinctio placeat earum
            accusantium eaque asperiores! Sed, dicta.
          </p>
          <div>
            <Button title={`Contact`} url={`/contact`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
