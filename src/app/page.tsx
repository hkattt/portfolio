'use client'

import React from 'react';

import { HomeTitleBlock } from '@/components/title-blocks';
import { Projects } from '@/components/sections';
import { useGetCollection } from '@/services';
import { mapProjectToPortfolioItem } from '@/lib/utils';
import { appConstants } from '@/lib/constants';
import type { PortfolioItem } from '@/lib/types';

const Home: React.FC = () => {
  const {
    data: projectsRecord,
    error: projectsError,
    isLoading: projectsLoading
  } = useGetCollection(appConstants.collections.projects);

  const projects: PortfolioItem[] = projectsRecord?.map((projectRecord) => mapProjectToPortfolioItem(projectRecord)) ?? [];

  return (
    <div>
      <HomeTitleBlock/>
      <Projects projects={projects} isLoading={projectsLoading} error={projectsError} featured />
    </div>
  );
}

export default Home;