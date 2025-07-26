import React from 'react';

import type { ButtonType, Placement} from '@/lib/types';

import styles from './Button.module.scss';

type ButtonProps = {
  type: ButtonType;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPlacement?: Placement;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({ type = 'link', children, icon, iconPlacement, onClick }) => {
  const typeClass: string = type === 'link' ? styles.linkButton : styles.primaryButton;
  const iconClass: string = children ? '' : styles.iconButton;

  return (
    <button className={`${styles.button} ${typeClass} ${iconClass}`} onClick={onClick}>
      {iconPlacement === 'left' && icon}
      {children}
      {iconPlacement === 'right' && icon}
    </button>
  );
};