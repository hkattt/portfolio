import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

import { LinkButton } from '@/components/ui/Button';

import styles from './NotFound.module.scss';

export const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <FaTimesCircle size={48} />
      <h2 className={styles.errorCode}>ERROR 404</h2>
      <h1 className={styles.title}>PAGE NOT FOUND</h1>
      <LinkButton href='/' target='_self'>Take me home</LinkButton>
    </div>
  );
};