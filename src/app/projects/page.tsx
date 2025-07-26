'use client'

import React from 'react';
import { FaCode } from "react-icons/fa";

import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { useGetCollection } from '@/services';
import { appConstants } from '@/lib/constants';
import { mapProjectToPortfolioItem } from '@/lib/utils';
import type { PortfolioItem, SkillSet, Tag } from '@/lib/types';

const Home: React.FC = () => {
  const {
    data: projectsRecord,
    error: projectsError,
    isLoading: projectsLoading
  } = useGetCollection(appConstants.collections.projects);

  if (!projectsRecord|| projectsLoading) {
    return <div>Loading...</div>
  }

  if (projectsError) {
    return <div>Error loading projects: {projectsError}</div>
  }

  const projects: PortfolioItem[] = projectsRecord.map((projectRecord) => mapProjectToPortfolioItem(projectRecord));

  const skills: Tag[] = [
    { text: 'TypeScript' },
    { text: 'C' },
    { text: 'C++' }
  ];

  const skills2: Tag[] = [
    { text: 'TypeScript' },
    { text: 'C' },
    { text: 'C++' },
    { text: 'TypeScript' },
    { text: 'C' },
    { text: 'C++' }
  ];

  const skills3: Tag[] = [
    { text: 'TypeScript' },
    { text: 'C' },
    { text: 'C++' },
    { text: 'TypeScript' },
    { text: 'C' },
    { text: 'C++' },
    { text: 'TypeScript' },
    { text: 'C' },
    { text: 'C++' },
    { text: 'TypeScript' },
    { text: 'C' },
    { text: 'C++' }
  ];

  const skillSets: SkillSet[] = [
    {
      title: 'Programming',
      icon: <FaCode />,
      skills: skills
    },
    {
      title: 'DevOps',
      icon: <FaCode />,
      skills: skills2
    },
    {
      title: 'URk',
      icon: <FaCode />,
      skills: skills3
    }
  ];

  return (
    <div>
      <Projects projects={projects} featured={false} />
      <Skills skillSets={skillSets} />
    </div>
  );
}

export default Home;