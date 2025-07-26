import React from 'react';
import Link from 'next/link';

import { LinkButton } from '@/components/ui/Button';

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <LinkButton href='/' target='_self'>
          <span className={styles.logo}>Hugo Kat</span>
        </LinkButton>
      </div>
      <nav>
        <Link href='/about' rel='noopener noreferrer'>About</Link>
        <Link href='/projects' rel='noopener noreferrer'>Projects</Link>
        <Link href='/contact' rel='noopener noreferrer'>Contact</Link>
      </nav>
    </header>
  );
};