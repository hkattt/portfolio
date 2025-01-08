import React from "react"
import Image from "next/image";
import Link from "next/link";

import styles from "./RedirectLink.module.scss";

import { RedirectLinkProps } from "@/app/types/props";

const RedirectLink = ({title, href}: RedirectLinkProps) => {
  return (
    <Link className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
        <p>{title}</p>
        <Image src="north-east.svg" alt="North east arrow icon icon" width={20} height={20} style={{objectFit: "cover"}}/>
    </Link>
  )
}

export default RedirectLink