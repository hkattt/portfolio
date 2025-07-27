import React from 'react';

import { Error } from '@/components/Error';
import { TitleBlock } from '@/components/ui/TitleBlock';
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
          I am a fifth-year computer science student at the ANU, expected to graduate at the end of 2025.

          <br /><br />

          During my studies, I have specalised in computer systems and cyber security.

          <br /><br />

          Along the way, I taughtmyself web-development which eventually led to working as a software developer
          at GovTEAMS.

          <br /><br />

          During my free time, I enjoy playing video games, watching TV shows, reading (occasionally...), and playing football.
        </p>
        <ProfilePicture profile={profile} isProfileLoading={isLoading} />
      </div>
    </TitleBlock>
  );
}