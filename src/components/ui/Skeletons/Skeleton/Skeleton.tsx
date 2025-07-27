import React from 'react';

import styles from './Skeleton.module.scss';

type SkeletonProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, width, height }) => {
  return (
    <div className={`${styles.skeleton} ${className}`} style={{ width, height }} />
  );
};