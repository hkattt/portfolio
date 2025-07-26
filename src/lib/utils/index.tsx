import { FaGithub } from 'react-icons/fa';

import { pocketbaseUrl } from '@/lib/config';
import type { PortfolioItem, Technology } from '@/lib/types';
import { RecordModel } from 'pocketbase';

export const mapProjectToPortfolioItem = (projectRecord: RecordModel): PortfolioItem => {
  return {
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
    tags: projectRecord['technologies'].map((technology: Technology) => ({
      text: technology.name
    })),
    extraLinks: [
      {
        icon: <FaGithub />,
        href: projectRecord["github"]
      }
    ],
    onGoing: false,
    sortOrder: projectRecord['sortOrder']
  }
}

export const mapExperienceToPortfolioItem = (experienceRecord: RecordModel): PortfolioItem => {
  console.log(experienceRecord);
  return {
    title: experienceRecord['title'],
    subtitle: experienceRecord['organisation'].title,
    subtitleLink: experienceRecord['organisation'].href,
    startDate: new Date(experienceRecord['startDate']),
    endDate: experienceRecord['endDate'] ? new Date(experienceRecord['endDate']) : undefined,
    description: experienceRecord['description'],
    tags: experienceRecord['technologies'].map((technology: Technology) => ({
        text: technology.name
    })),
    extraLinks: [],
    onGoing: true,
    sortOrder: experienceRecord['sortOrder']
  }
}

export const mapEducationToPortfolioItem = (educationRecord: RecordModel): PortfolioItem => {
  return {
    title: educationRecord['institution'],
      subtitle: educationRecord['qualification'],
    startDate: new Date(educationRecord['startDate']),
    endDate: educationRecord['endDate'] ? new Date(educationRecord['endDate']) : undefined,
    tags: [],
    extraLinks: [],
    onGoing: true,
    sortOrder: educationRecord['sortOrder']
  }
}