import React from 'react';

import { Section } from '@/components/ui/Section';
import { PortfolioItems } from '@/components/ui/PortfolioItems';
import type { PortfolioItem as PortfolioItemType } from '@/lib/types';

type EducationProps = {
  education: PortfolioItemType[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  education.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Section title='EDUCATION'>
      <PortfolioItems portfolioItems={education} />
    </Section>
  );
};