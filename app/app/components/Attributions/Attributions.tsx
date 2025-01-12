import React from "react"
import Attribution from "./Attribution/Attribution";

import styles from "./Attributions.module.scss";

import { AttributionsProps } from "@/app/types/props"

const Attributions = ({attributions}: AttributionsProps) => {
  return (
    <section className={styles.attributions} id="My Experiences" aria-label="Experiences">
        <h1>Attribution</h1>
        <div className={styles.grid}>
            {
                attributions.map((attribution, index) => (
                    <Attribution 
                        key={index} 
                        image={attribution.image} 
                        icon={attribution.icon} 
                        license={attribution.license} 
                        />
                ))
            }
        </div>
    </section>
  )
}

export default Attributions