import React from 'react';

import { Section } from '@/components/ui/Section';
import { PortfolioItems } from '@/components/ui/PortfolioItems';
import type { PortfolioItem as PortfolioItemType } from '@/lib/types';

type ExperiencesProps = {
  experiences: PortfolioItemType[];
}
export const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  experiences.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Section title='WORK EXPERIENCE'>
      <PortfolioItems portfolioItems={experiences} />
    </Section>
  );
};