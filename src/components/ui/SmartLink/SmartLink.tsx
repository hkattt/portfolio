import React from 'react';
import Link from 'next/link';

import styles from './SmartLink.module.scss';

type SmartLinkProps = {
  href?: string;
  children?: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
}

export const SmartLink: React.FC<SmartLinkProps> = ({ href, children, target = '_self'}) => {
  if (!href) {
    return children;
  }

  return (
    <Link className={styles.link} href={href} target={target} rel="noopener noreferrer">
      {children}
    </Link>
  );
};