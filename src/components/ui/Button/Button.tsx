import React from 'react';
import Link from 'next/link';

import styles from './Button.module.scss';

type ButtonType = 'primary' | 'text' | 'link';

type ButtonProps = {
  type: ButtonType;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ children, icon }) => {
  return (
    <button className={styles.button}>
      {icon}
      {children}
    </button>
  );
};