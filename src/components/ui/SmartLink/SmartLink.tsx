import React from 'react';
import Link from 'next/link';

import styles from './SmartLink.module.scss';

type SmartLinkProps = {
  href?: string;
  children?: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
  active?: boolean;
}

export const SmartLink: React.FC<SmartLinkProps> = ({ href, children, target = '_self', active = false }) => {
  if (!href) {
    return children;
  }

  return (
    <Link className={`${styles.link} ${active ? styles.active : ''}`} href={href} target={target} rel="noopener noreferrer">
      {children}
    </Link>
  );
};