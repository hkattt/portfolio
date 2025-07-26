import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { LinkButton } from "@/components/ui/Button";
import styles from "./Footer.module.scss";

import { appConstants } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Hugo Kat. All rights reserved.</p>
      <div>
        <LinkButton href={appConstants.socialUrls.githubUrl} icon={<FaGithub />} />
        <LinkButton href={appConstants.socialUrls.linkedinUrl} icon={<FaLinkedin />} />
        <LinkButton href={`mailto:${appConstants.socialUrls.emailAddress}`} icon={<FaEnvelope />} />
      </div>
    </footer>
  );
};