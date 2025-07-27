import React from 'react';

import styles from './ResultLayout.module.scss';

type ResultPageProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export const ResultLayout: React.FC<ResultPageProps> = ({ title, subtitle, icon, children }) => {
  return (
    <div>
      {icon}
      { subtitle && <h2 className={styles.subtitle}>{subtitle}</h2> }
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};