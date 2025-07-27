'use client'

import React from 'react';

import { AboutTitleBlock } from '@/components/title-blocks';
import { Education, Experiences } from '@/components/sections';
import { useGetCollection, useGetSingleRecord } from '@/services';
import { appConstants } from '@/lib/constants';
import { mapExperienceToPortfolioItem, mapEducationToPortfolioItem, mapProfileRecordToProfile } from '@/lib/utils';
import type { PortfolioItem, Profile } from '@/lib/types';

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

  const {
    data: profileRecord,
    error: profileError,
    isLoading: profileLoading
  } = useGetSingleRecord(appConstants.collections.profile);

  const experiences: PortfolioItem[] = experiencesRecord?.map(experienceRecord => mapExperienceToPortfolioItem(experienceRecord)) ?? [];
  const education: PortfolioItem[] = educationsRecord?.map(educationRecord => mapEducationToPortfolioItem(educationRecord)) ?? [];
  const profile: Profile | undefined = profileRecord ? mapProfileRecordToProfile(profileRecord) : undefined;

  return (
    <div>
      <AboutTitleBlock profile={profile} isLoading={profileLoading} error={profileError} />
      <Experiences experiences={experiences} isLoading={experiencesLoading} error={experiencesError} />
      <Education education={education} isLoading={educationsLoading} error={educationError} />
    </div>
  );
};

export default About;