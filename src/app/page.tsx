'use client'

import React from 'react';

import { Projects } from '@/components/sections/Projects';
import { Loading } from '@/components/pages/Loading';
import { Section } from '@/components/ui/Section';
import { useGetCollection } from '@/services';
import { appConstants } from '@/lib/constants';
import { mapProjectToPortfolioItem } from '@/lib/utils';
import type { PortfolioItem } from '@/lib/types';

const Home: React.FC = () => {
  const {
    data: projectsRecord,
    error: projectsError,
    isLoading: projectsLoading
  } = useGetCollection(appConstants.collections.projects);

  if (!projectsRecord || projectsLoading) {
    return <Loading />;
  }

  if (projectsError) {
    return <div>Error loading projects: {projectsError}</div>
  }

  const projects: PortfolioItem[] = projectsRecord.map((projectRecord) => mapProjectToPortfolioItem(projectRecord));

  return (
    <div>
      <Section title='HUGO KAT'>
        <div>
          Info about me!
          TODO:
          - Update project dates
          - Add organisation/subtitle link for experiences
          - Add GitHub and web links for projects
          - Create loading screen
          - Update image for the social media stuff
        </div>
      </Section>
      <Projects projects={projects} featured />
    </div>
  );
}

export default Home;