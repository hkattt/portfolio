'use client'

import React from 'react';

import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { useGetCollection } from '@/services';
import { appConstants } from '@/lib/constants';
import {mapProjectToPortfolioItem, mapSkillToSkillSet} from '@/lib/utils';
import type { PortfolioItem, SkillSet, Tag } from '@/lib/types';

const Home: React.FC = () => {
  const {
    data: projectsRecord,
    error: projectsError,
    isLoading: projectsLoading
  } = useGetCollection(appConstants.collections.projects);

  const {
    data: skillsRecord,
    error: skillsError,
    isLoading: skillsLoading,
  } = useGetCollection(appConstants.collections.skills);

  const projects: PortfolioItem[] = projectsRecord?.map(projectRecord => mapProjectToPortfolioItem(projectRecord)) ?? [];
  const skillSets: SkillSet[] = skillsRecord?.map(skillsRecord => mapSkillToSkillSet(skillsRecord)) ?? [];

  return (
    <div>
      <h1>Projects</h1>
      <div>
        Summary about my interests and projects
      </div>
      <Projects projects={projects} featured={false} isLoading={projectsLoading} error={projectsError} />
      <Skills skillSets={skillSets} isLoading={skillsLoading} error={skillsError} />
    </div>
  );
}

export default Home;