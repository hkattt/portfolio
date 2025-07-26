import React from 'react';

import { Skeleton } from './Skeleton';
import type { Direction } from '@/lib/types';

import styles from './Skeletons.module.scss';

type SkeletonsProps = {
  n: number;
  className?: string;
  width?: number | string;
  height?: number | string;
  direction?: Direction;
}

export const Skeletons: React.FC<SkeletonsProps> = ({ n, className, width, height, direction = 'vertical' }) => {
  return (
    <div
      style={{ flexDirection: direction === 'vertical' ? 'column' : 'row' }}
      className={styles.skeletons}
    >
      {
        Array(n).fill(null).map((_, index) => (
          <Skeleton key={index} className={className} width={width} height={height} />
        ))
      }
    </div>
  );
};