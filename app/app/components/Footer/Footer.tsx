import React from "react";
import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer} id="Footer" aria-label="Footer">
        <div>
            <p className={styles.body}>Designed in <Link href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</Link> with 
            the <Link href="https://www.nordtheme.com/" target="_blank" rel="noopener noreferrer">Nord Theme</Link>, built 
            using <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</Link>, and
            deployed by <Link href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</Link>.</p>
            <p className={styles.body}><Link href="/attribution" target="_blank" rel="noopener noreferrer">Attribution</Link></p>  
            <p className={styles.copyright}>© 2025 Hugo Kat. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer