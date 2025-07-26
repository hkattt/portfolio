import React from 'react';

import styles from './Card.module.scss';

type CardProps = {
  className?: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}
export const Card: React.FC<CardProps> = ({ className = '', title, icon, children }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.header}>
        {icon}
        <h3 className={styles.title}>{title}</h3>
      </div>
      {children}
    </div>
  );
};