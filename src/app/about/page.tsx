'use client'

import React from 'react';

import { Section } from '@/components/Section';
import { PortfolioItems } from '@/components/PortfolioItems';
import { useGetCollection } from '@/services';
import { appConstants } from '@/lib/constants';
import type { PortfolioItem, Technology } from '@/lib/types';

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
    return <div>Loading...</div>
  }

  if (experiencesError) {
    return <div>Error loading experiences: {experiencesError}</div>
  }

  if (educationError) {
    return <div>Error loading education: {educationError}</div>
  }

  const experiences: PortfolioItem[] = experiencesRecord.map((experienceRecord, index) => (
    {
      title: experienceRecord['title'],
      subtitle: experienceRecord['organisation'].title,
      startDate: new Date(experienceRecord['startDate']),
      endDate: experienceRecord['endDate'] ? new Date(experienceRecord['endDate']) : undefined,
      description: experienceRecord['description'],
      tags: experienceRecord['technologies'].map((technology: Technology) => technology.name),
      extraLinks: [],
      onGoing: true,
      sortOrder: index
    }
  ));

  const education: PortfolioItem[] = educationsRecord.map((educationRecord, index) => (
    {
      title: educationRecord['institution'],
      subtitle: educationRecord['qualification'],
      startDate: new Date(educationRecord['startDate']),
      endDate: educationRecord['endDate'] ? new Date(educationRecord['endDate']) : undefined,
      tags: [],
      extraLinks: [],
      onGoing: true,
      sortOrder: index
    }
  ));

  return (
    <div>
      <Section title='ABOUT'>
        <div>
          Info about me!
        </div>
      </Section>
      <Section title='WORK EXPERIENCE'>
        <PortfolioItems portfolioItems={experiences} />
      </Section>
      <Section title='EDUCATION'>
        <PortfolioItems portfolioItems={education} />
      </Section>
    </div>
  );
};

export default About;