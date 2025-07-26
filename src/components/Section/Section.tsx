import React from 'react';

import styles from './Section.module.scss';

type SectionProps = {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.bar} />
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children}
    </section>
  );
};