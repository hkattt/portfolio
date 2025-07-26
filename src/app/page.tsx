'use client'

import React from 'react';

import { Section } from '@/components/Section';
import { PortfolioItems } from '@/components/PortfolioItems';
import { useGetCollection } from '@/services';
import { pocketbaseUrl } from '@/lib/config';
import { appConstants } from '@/lib/constants';
import type { PortfolioItem, Technology } from '@/lib/types';
import {FaGithub} from "react-icons/fa";

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

  const projects: PortfolioItem[] = projectsRecord.map((projectRecord) => (
    {
      image: {
        src: `${pocketbaseUrl}/api/files/projects/${projectRecord["id"]}/${projectRecord["image"]}`,
        alt: projectRecord['alt'],
        width: 0,
        height: 0
      },
      title: projectRecord['title'],
      titleLink: projectRecord['online'],
      startDate: new Date(projectRecord['date']),
      endDate: undefined,
      description: projectRecord['description'],
      tags: projectRecord['technologies'].map((technology: Technology) => technology.name),
      extraLinks: [
        {
          icon: <FaGithub />,
          href: projectRecord["github"]
        }
      ],
      onGoing: false,
      sortOrder: projectRecord['sortOrder']
    }
  ));

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
      <Section title='FEATURED PROJECTS'>
        <PortfolioItems portfolioItems={projects} />
      </Section>
    </div>
  );
}

export default Home;