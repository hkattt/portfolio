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

const buttonTypeClassMap: Record<ButtonType, string> = {
  'default': styles.defaultButton,
  'link':    styles.linkButton,
  'primary': styles.primaryButton,
}

export const Button: React.FC<ButtonProps> = ({ type = 'default', children, icon, iconPlacement, onClick }) => {
  const typeClass: string = buttonTypeClassMap[type];
  const iconClass: string = children ? '' : styles.iconButton;

  return (
    <button className={`${styles.button} ${typeClass} ${iconClass}`} onClick={onClick}>
      {iconPlacement === 'left' && icon}
      {children}
      {iconPlacement === 'right' && icon}
    </button>
  );
};