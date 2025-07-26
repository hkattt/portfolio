'use client'

import React from 'react';

import { Projects } from '@/components/sections/Projects';
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
      <h1>Hugo Kat</h1>
      <div>
        Info about me!
        TODO:
        - Add custom cursor
        - Update image for the social media stuff
        - Add skills to the datavase
        - Create generic error fall-back page
        - Add loading and error states to sections
        - Add loading skeletons for sections
        - Add loading page for first login
        - Add favicon
        - Add resume download
        - Remove the Hugo Kat in nav. Just have a home nav option
        - Highlight nav option based on current path
        - Make not found page prettier
      </div>
      <Projects projects={projects} isLoading={projectsLoading} error={projectsError} featured />
    </div>
  );
}

export default Home;