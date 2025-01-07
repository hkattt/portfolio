import React from "react"

import styles from "./IconButton.module.scss";

interface IconButtonProps {
  link: string;
  src: string;
  alt: string;
}

const IconButton = ({link, src, alt}: IconButtonProps) => {
  return (
    <a className={styles.container} href={link} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt}/>
    </a>
  )
}

export default IconButton