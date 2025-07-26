import React from 'react';
import Link from 'next/link';

import { LinkButton } from '@/components/ui/Button';
import { appConstants } from '@/lib/constants';

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <LinkButton href={appConstants.routes.home} target='_self'>
          <span className={styles.logo}>Hugo Kat</span>
        </LinkButton>
      </div>
      <nav>
        <Link href={appConstants.routes.about} rel='noopener noreferrer'>About</Link>
        <Link href={appConstants.routes.projects} rel='noopener noreferrer'>Projects</Link>
        <Link href={appConstants.routes.contact} rel='noopener noreferrer'>Contact</Link>
      </nav>
    </header>
  );
};