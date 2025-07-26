import React from 'react';

import { Card } from '@/components/ui/Card/Card';
import { Tags } from '@/components/ui/Tags';
import { Section } from '../ui/Section';
import type { SkillSet } from '@/lib/types';

import styles from './Skills.module.scss';

type SkillsProps = {
  skillSets: SkillSet[];
}

export const Skills: React.FC<SkillsProps> = ({ skillSets }) => {
  return (
    <Section title='SKILLS'>
      <div className={styles.skills}>
        {
          skillSets.map((skillSet, index) => (
            <Card key={index} className={styles.skill} title={skillSet.title} icon={skillSet.icon}>
              <Tags tags={skillSet.skills} />
            </Card>
          ))
        }
      </div>
    </Section>
  );
};