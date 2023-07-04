import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam labore
          perspiciatis harum commodi consequuntur fugiat esse quaerat molestias,
          obcaecati sint odio rerum ea, quae voluptas, error quibusdam
          voluptates cupiditate suscipit?
        </p>
        <Button title={`My Work`} url={`/portfolio`} />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} />
      </div>
    </div>
  );
}
