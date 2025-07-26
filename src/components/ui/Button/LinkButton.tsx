import React from 'react';
import Link from 'next/link';

import styles from './Button.module.scss';


type LinkButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
  target?:  React.HTMLAttributeAnchorTarget;
}
export const LinkButton: React.FC<LinkButtonProps> = ({ children, icon, href, target = '_blank'}) => {
  return (
    <Link className={styles.button} href={href} target={target} rel='noopener noreferrer' >
      {icon}
      {children}
    </Link>
  );
};