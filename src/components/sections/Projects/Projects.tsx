import React from 'react';

import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { Error } from '@/components/Error';
import { Section } from '@/components/ui/Section';
import { PortfolioItems } from '@/components/ui/PortfolioItems';
import { Skeletons } from '@/components/ui/Skeletons';
import { LinkButton } from '@/components/ui/Button';
import { appConstants } from '@/lib/constants';
import type { PortfolioItem as PortfolioItemType } from '@/lib/types';


type ProjectsProps = {
  projects: PortfolioItemType[];
  isLoading: boolean;
  error?: Error;
  featured: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, isLoading, error, featured }) => {
  if (error) {
    return <Error message='Failed to fetch projects' error={error} />;
  }

  // Only two projects are shown when featured
  const numberOfProjects = featured ? 2 : projects.length;

  projects.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Section title='PROJECTS'>
      {
        isLoading
          ? <Skeletons n={2} width='100%' height={150} />
          : (
            <>
              <PortfolioItems portfolioItems={projects.slice(0, numberOfProjects)} />
              <LinkButton
                href={featured ? appConstants.routes.projects : appConstants.socialUrls.github}
                target='_self'
                icon={<FaArrowUpRightFromSquare />}
                iconPlacement='right'
              >
                {featured ? 'View more projects' : 'View GitHub'}
              </LinkButton>
            </>
          )
      }
    </Section>
  );
};