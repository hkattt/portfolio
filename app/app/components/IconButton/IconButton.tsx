import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./IconButton.module.scss";

interface IconButtonProps {
  link: string;
  src: string;
  alt: string;
}

const IconButton = ({link, src, alt}: IconButtonProps) => {
  return (
    <Link className={styles.container} href={link} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} width={30} height={30} style={{objectFit: "cover"}}/>
    </Link>
  )
}

export default IconButton