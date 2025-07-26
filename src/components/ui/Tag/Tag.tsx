import React from 'react';

import styles from './Tag.module.scss';

type TagProps = {
  text: string;
  icon?: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ text, icon }) => {
  return (
    <div className={styles.tag}>
      {icon}
      <span className={styles.text}>{text}</span>
    </div>
  );
};