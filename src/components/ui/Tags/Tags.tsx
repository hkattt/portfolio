import React from 'react';

import { Tag } from './Tag';
import type { Tag as TagType } from '@/lib/types';

import styles from './Tags.module.scss';

type TagsProps = {
  tags: TagType[];
}
export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {
        tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))
      }
    </div>
  );
};