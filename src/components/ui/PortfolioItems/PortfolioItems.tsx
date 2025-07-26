import React from 'react';

import { PortfolioItem } from './PortfolioItem';
import type { PortfolioItem as PortfolioItemType } from '@/lib/types';

import styles from './PortfolioItems.module.scss'

type PortfolioItemsProps = {
  portfolioItems: PortfolioItemType[];
}

export const PortfolioItems: React.FC<PortfolioItemsProps> = ({ portfolioItems }) => {
  return (
    <div className={styles.items}>
      {
        portfolioItems.map((portfolioItem, index) => (
          <PortfolioItem key={index} portfolioItem={portfolioItem} />
        ))
      }
    </div>
  );
};