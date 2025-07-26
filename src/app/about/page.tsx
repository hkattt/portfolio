'use client'

import React from 'react';

import { Experiences } from '@/components/sections/Experiences';
import { Education } from '@/components/sections/Education';
import { useGetCollection } from '@/services';
import { appConstants } from '@/lib/constants';
import { mapExperienceToPortfolioItem, mapEducationToPortfolioItem } from '@/lib/utils';
import type { PortfolioItem } from '@/lib/types';

const About: React.FC = () => {
  const {
    data: experiencesRecord,
    error: experiencesError,
    isLoading: experiencesLoading
  } = useGetCollection(appConstants.collections.experiences);

  const {
    data: educationsRecord,
    error: educationError,
    isLoading: educationsLoading
  } = useGetCollection(appConstants.collections.education);

  const experiences: PortfolioItem[] = experiencesRecord?.map(experienceRecord => mapExperienceToPortfolioItem(experienceRecord)) ?? [];
  const education: PortfolioItem[] = educationsRecord?.map(educationRecord => mapEducationToPortfolioItem(educationRecord)) ?? [];

  return (
    <div>
      <h1>About Hugo Kat</h1>
      <div>
        Info about me!
      </div>
      <Experiences experiences={experiences} isLoading={experiencesLoading} error={experiencesError} />
      <Education education={education} isLoading={educationsLoading} error={educationError} />
    </div>
  );
};

export default About;