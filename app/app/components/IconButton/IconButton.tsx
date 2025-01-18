import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./IconButton.module.scss";

import { IconButtonProps } from "@/app/types/props";

const IconButton = ({image, link}: IconButtonProps) => {
  return (
    <Link className={styles.container} href={link} target="_blank" rel="noopener noreferrer">
      <Image 
        src={image.src} 
        alt={image.alt} 
        width={image.width} height={image.height} 
        style={{
          width: "clamp(20px, 3vw, 30px)", 
          height: "clamp(20px, 3vw, 30px)", 
          objectFit: "cover"
        }}
      />
    </Link>
  )
}

export default IconButton