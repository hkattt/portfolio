import React from 'react';

import { Tags } from '@/components/ui/Tags';
import { Date } from '@/components/ui/Date';
import { LinkButton } from '@/components/ui/Button';
import { SmartLink } from '@/components/ui/SmartLink';
import type { PortfolioItem as PortfolioItemType } from '@/lib/types';

import styles from './PortfolioItem.module.scss';

type PortfolioItemProps = {
  portfolioItem: PortfolioItemType;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({ portfolioItem }) => {
  return (
    <div className={styles.item}>
      <div className={styles.date}>
        <Date startDate={portfolioItem.startDate} endDate={portfolioItem.endDate} onGoing={portfolioItem.onGoing} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <SmartLink href={portfolioItem.titleLink} target='_blank'>
            <h3 className={styles.title}>{portfolioItem.title}</h3>
          </SmartLink>
          { portfolioItem.extraLinks.length > 0 && (
            <div>
              {
                portfolioItem.extraLinks.map((link, index) => (
                  <LinkButton key={index} href={link.href} icon={link.icon} />
                ))
              }
            </div>
          )}
        </div>
        { portfolioItem.subtitle && (
          <SmartLink href={portfolioItem.subtitleLink} target='_blank'>
            <span className={styles.subtitle}>{portfolioItem.subtitle}</span>
          </SmartLink>
        )}
        { portfolioItem.description && <p className={styles.description}>{portfolioItem.description}</p> }
        { portfolioItem.tags.length > 0 && <Tags tags={portfolioItem.tags} /> }
      </div>
    </div>
  );
};