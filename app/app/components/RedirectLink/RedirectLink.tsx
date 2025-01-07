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
        <Image src="github.svg" alt="redirect icon" width={16} height={16} style={{objectFit: "cover"}}/>
    </Link>
  )
}

export default RedirectLink