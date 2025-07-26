import React from 'react';

import { FaArrowRight } from 'react-icons/fa';

import { Section } from '@/components/ui/Section';
import { PortfolioItems } from '@/components/ui/PortfolioItems';
import { LinkButton } from '@/components/ui/Button';
import { appConstants } from '@/lib/constants';
import type { PortfolioItem as PortfolioItemType } from '@/lib/types';

type ProjectsProps = {
  projects: PortfolioItemType[];
  featured: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, featured }) => {
  // Only two projects are shown when featured
  const numberOfProjects = featured ? 2 : projects.length;

  projects.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Section title='PROJECTS'>
      <PortfolioItems portfolioItems={projects.slice(0, numberOfProjects)} />
      { featured && <LinkButton href={appConstants.routes.projects} target='_self' icon={<FaArrowRight />}>View more projects</LinkButton> }
      { !featured && <LinkButton href={appConstants.socialUrls.github} target='_self' icon={<FaArrowRight />}>View GitHub</LinkButton> }
    </Section>
  );
};