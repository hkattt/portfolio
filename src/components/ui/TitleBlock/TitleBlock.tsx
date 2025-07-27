import React from 'react';

import styles from './TitleBlock.module.scss';

type TitleBlockProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const TitleBlock: React.FC<TitleBlockProps> = ({ title, subtitle, children }) => {
  return (
    <div className={styles.titleBlock}>
      <div className={styles.header}>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
      {children && <div className={styles.content}>{children}</div> }
    </div>
  );
};