import React from "react"
import Image from "next/image";
import Link from "next/link";

import styles from "./RedirectLink.module.scss";

interface RedirectLinkProps {
    title: string;
    link: string;
}

const RedirectLink = ({title, link}: RedirectLinkProps) => {
  return (
    <Link className={styles.link} href={link} target="_blank" rel="noopener noreferrer">
        <p>{title}</p>
        <Image src="north-east.svg" alt="North east arrow icon icon" width={20} height={20} style={{objectFit: "cover"}}/>
    </Link>
  )
}

export default RedirectLink