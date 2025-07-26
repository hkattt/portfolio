import React from 'react';

import { LinkButton } from '@/components/ui/Button';
import { SmartLink} from '@/components/ui/SmartLink';
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
        <SmartLink href={appConstants.routes.about}>About</SmartLink>
        <SmartLink href={appConstants.routes.projects}>Projects</SmartLink>
        <SmartLink href={appConstants.routes.contact}>Contact</SmartLink>
      </nav>
    </header>
  );
};