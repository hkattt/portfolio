import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

import { LinkButton } from "@/components/ui/Button";
import styles from "./Footer.module.scss";

import { appConstants } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Hugo Kat. All rights reserved.</p>
      <div>
        <LinkButton href={appConstants.socialUrls.github} icon={<FaGithub />} />
        <LinkButton href={appConstants.socialUrls.linkedin} icon={<FaLinkedinIn />} />
        <LinkButton href={`mailto:${appConstants.socialUrls.emailAddress}`} icon={<FaEnvelope />} />
      </div>
    </footer>
  );
};