import React from 'react';

import styles from './ResultPage.module.scss';

type ResultPageProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export const ResultPage: React.FC<ResultPageProps> = ({ title, subtitle, icon, children }) => {
  return (
    <div className={styles.result}>
      {icon}
      { subtitle && <h2 className={styles.subtitle}>{subtitle}</h2> }
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};