import React from 'react';

import { Spinner } from '@/components/ui/Spinner';

import styles from './Loading.module.scss';

export const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <h1 className={styles.title}>Hugo Kat</h1>
      <Spinner />
    </div>
  );
};