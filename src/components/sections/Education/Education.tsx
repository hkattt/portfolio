import React from 'react';

import { Section } from '@/components/ui/Section';
import { PortfolioItems } from '@/components/ui/PortfolioItems';
import { Skeletons } from '@/components/ui/Skeletons';
import { Error } from '@/components/ui/Error';
import type { PortfolioItem as PortfolioItemType } from '@/lib/types';

type EducationProps = {
  education: PortfolioItemType[];
  isLoading: boolean;
  error?: Error;
}

export const Education: React.FC<EducationProps> = ({ education, isLoading, error }) => {
  if (error) {
    return <Error message='Failed to fetch education' error={error} />;
  }

  education.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Section title='EDUCATION'>
      {
        isLoading
        ? <Skeletons n={1} width='100%' height={100} />
        : <PortfolioItems portfolioItems={education} />
      }
    </Section>
  );
};