import React from 'react';

import { Section } from '@/components/ui/Section';
import { PortfolioItems } from '@/components/ui/PortfolioItems';
import { Skeletons } from '@/components/ui/Skeletons';
import { Error } from '@/components/ui/Error';
import type { PortfolioItem as PortfolioItemType } from '@/lib/types';

type ExperiencesProps = {
  experiences: PortfolioItemType[];
  isLoading: boolean;
  error?: Error;
}
export const Experiences: React.FC<ExperiencesProps> = ({ experiences, isLoading, error }) => {
  if (error) {
    return <Error message='Failed to fetch experiences' error={error} />;
  }

  experiences.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Section title='WORK EXPERIENCE'>
      {
        isLoading
          ? <Skeletons n={2} width='100%' height={150} />
          : <PortfolioItems portfolioItems={experiences} />
      }
    </Section>
  );
};