import React from 'react';

import { TitleBlock } from '@/components/ui/TitleBlock';
import { Error } from '@/components/ui/Error';
import { Profile } from '@/lib/types';

import { ProfilePicture } from './ProfilePicture';
import styles from './AboutTitleBlock.module.scss';

type AboutTitleBlockProps = {
  profile?: Profile;
  isLoading: boolean;
  error?: Error;
}

export const AboutTitleBlock: React.FC<AboutTitleBlockProps> = ({ profile, isLoading, error }) => {
  if (error) {
    return <Error message='Failed to fetch profile' error={error} />;
  }

  return (
    <TitleBlock title='About'>
      <div className={styles.about}>
        <p>
          I am a full-stack developer at GovTEAMS and enjoy contributing across the entire stack, from designing user interfaces and creating API endpoints to provisioning cloud
          infrastructure with infrastructure-as-code.

          <br /><br />

          I hold a degree in Computer Science, specialising in computer systems and cyber security, which gave me a strong foundation
          in software development, from low-level systems through to modern web applications.

          <br /><br />

          During my free time, I enjoy reading fantasy books, playing video games, and playing football.
        </p>
        <ProfilePicture profile={profile} isProfileLoading={isLoading} />
      </div>
    </TitleBlock>
  );
}