import React from 'react';

import type { Tag as TagType } from '@/lib/types';

import styles from './Tag.module.scss';

type TagProps = {
  tag: TagType;
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <div className={styles.tag}>
      {tag.icon}
      <span className={styles.text}>{tag.text}</span>
    </div>
  );
};