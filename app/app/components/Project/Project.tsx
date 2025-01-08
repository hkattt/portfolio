import Image from "next/image";
import RedirectLink from "../RedirectLink/RedirectLink";
import TechnologyPill from "../TechnologyPill/TechnologyPill";

import styles from "./Project.module.scss";

import { ProjectProps } from "@/app/types/props";

const Project = ({image, title, description, links, technologies}: ProjectProps) => {
  return (
    <div className={styles.project}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.width} sizes="100vw" style={{width: "100%", height: "auto"}}></Image>
        <div className={styles.content}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div>
                {
                    links.map((link, index) => (
                        <RedirectLink key={index} title={link.title} href={link.href}></RedirectLink>
                    ))
                }
            </div>
            <div>
                {
                    technologies.map((technology, index) => (
                        <TechnologyPill key={index} name={technology}></TechnologyPill>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Project