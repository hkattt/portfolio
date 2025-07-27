import React from 'react';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeletons/Skeleton';
import { Tags } from '@/components/ui/Tags';
import { Error } from '@/components/ui/Error';
import type { SkillSet } from '@/lib/types';

import styles from './Skills.module.scss';

type SkillsProps = {
  skillSets: SkillSet[];
  isLoading: boolean;
  error?: Error;
}

export const Skills: React.FC<SkillsProps> = ({ skillSets, isLoading, error }) => {
  if (error) {
    return <Error message='Failed to fetch skills' error={error} />;
  }

  skillSets.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Section title='SKILLS'>
      <div className={styles.skills}>
        {
          isLoading
            ? (
              Array(5).fill(null).map((_, i) => (
                <Skeleton className={styles.skill} key={i} width='100%' height={100} />
              ))
            )
            : (
              skillSets.map((skillSet, index) => (
                <Card key={index} className={styles.skill} title={skillSet.title} icon={skillSet.icon}>
                  <Tags tags={skillSet.skills} />
                </Card>
              ))
            )
        }
      </div>
    </Section>
  );
};