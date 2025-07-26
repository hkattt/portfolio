'use client'

import React from 'react';

import { Experiences } from '@/components/sections/Experiences';
import { Education } from '@/components/sections/Education';
import { Loading } from '@/components/pages/Loading';
import { Section } from '@/components/ui/Section';
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

  if (!experiencesRecord || !educationsRecord || experiencesLoading || educationsLoading) {
    return <Loading />;
  }

  if (experiencesError) {
    return <div>Error loading experiences: {experiencesError}</div>
  }

  if (educationError) {
    return <div>Error loading education: {educationError}</div>
  }

  const experiences: PortfolioItem[] = experiencesRecord.map(experienceRecord => mapExperienceToPortfolioItem(experienceRecord));

  const education: PortfolioItem[] = educationsRecord.map(educationRecord => mapEducationToPortfolioItem(educationRecord));

  return (
    <div>
      <Section title='ABOUT'>
        <div>
          Info about me!
        </div>
      </Section>
      <Experiences experiences={experiences} />
      <Education education={education} />
    </div>
  );
};

export default About;