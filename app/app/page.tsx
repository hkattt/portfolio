import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <p className={styles.large}>Large</p>
      <p className={styles.bodyBold}>Body Bold</p>
      <p className={styles.body}>Body</p>
      <p className={styles.small}>Small</p>
    </main> 
  )
}
