import React from 'react';
import Image from 'next/image';

import { Error } from '@/components/Error';
import { TitleBlock } from '@/components/ui/TitleBlock';
import { Skeleton } from '@/components/ui/Skeletons/Skeleton';
import { Profile } from '@/lib/types';

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
          Info about me!
          I'm a mathematics and computing student. Currently researching on cooperative AI, and freelancing as a System & Website Developer while pursuing my degree.
        </p>
        {
          (!profile || isLoading)
            ? <Skeleton width={300} height={400} />
            : <Image src={profile.image.src} alt={profile.image.alt} width={300} height={300} layout='responsive' />
        }
      </div>
    </TitleBlock>
  );
}