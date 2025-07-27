import React from 'react';

import { NavigationBar } from './NavigationBar';
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
      <NavigationBar />
    </header>
  );
};