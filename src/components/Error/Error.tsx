import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

import styles from './Error.module.scss';

type ErrorProps = {
  message: string;
  error: Error;
}

export const Error: React.FC<ErrorProps> = ({ message, error }) => {
  return (
    <div className={styles.error}>
      <div className={styles.header}>
        <FaTimesCircle size={20} />
        <h2 className={styles.title}>An unexpected error occurred</h2>
      </div>
      <p className={styles.message}>{`${message}: ${error.message}`}</p>
    </div>
  );
};