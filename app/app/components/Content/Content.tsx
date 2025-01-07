import React from "react";
import Hero from "../Hero/Hero";

import styles from "./Content.module.scss"

const Content = () => {
  return (
    <div className={styles.container}>
        <Hero></Hero>
    </div>
  )
}

export default Content