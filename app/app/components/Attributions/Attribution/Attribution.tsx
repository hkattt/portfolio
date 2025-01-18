import React from "react";
import Link from "next/link";
import Image from "next/image";
import RedirectLink from "../../RedirectLink/RedirectLink";

import styles from "./Attribution.module.scss";

import { AttributionProps } from "@/app/types/props";

const Attribution = ({image, icon, license}: AttributionProps) => {
  console.log(license)
  return (
    <div className={styles.attribution}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} style={{width: "clamp(35px, 5vw, 45px)", height: "clamp(35px, 5vw, 45px)", objectFit: "cover"}}/>
        <div>
            <RedirectLink title={icon.title} href={icon.href}></RedirectLink>
            {
              license.title === "" && license.href === "" ? <p className={styles.body}>No listed license</p> : 
                <p className={styles.body}><Link href={license.href} target="_blank" rel="noopener noreferrer">{license.title}</Link></p>
            }
        </div>
    </div>
  )
}

export default Attribution