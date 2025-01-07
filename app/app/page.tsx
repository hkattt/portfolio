import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

import styles from "./page.module.scss";

export default function Main() {
  return (
    <>
      <main className={styles.portfolio}>
        <Hero></Hero>
      </main> 
      <Footer></Footer>
    </>
  )
}
