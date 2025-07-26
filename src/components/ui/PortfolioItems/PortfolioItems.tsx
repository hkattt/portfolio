import React from 'react';

import { PortfolioItem } from './PortfolioItem';
import { Divider } from '@/components/ui/Divider';
import type { PortfolioItem as PortfolioItemType } from '@/lib/types';

type PortfolioItemsProps = {
  portfolioItems: PortfolioItemType[];
}

export const PortfolioItems: React.FC<PortfolioItemsProps> = ({ portfolioItems }) => {
  return (
    <div>
      {
        portfolioItems.map((portfolioItem, index) => (
          <div key={index}>
            <PortfolioItem portfolioItem={portfolioItem} />
            { index < portfolioItems.length - 1 && <Divider /> }
          </div>
        ))
      }
    </div>
  );
};