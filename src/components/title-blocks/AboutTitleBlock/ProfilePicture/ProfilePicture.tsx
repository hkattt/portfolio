'use client'

import React, { useState } from 'react';
import Image from 'next/image';

import { Skeleton } from '@/components/ui/Skeletons/Skeleton';
import type { Profile } from '@/lib/types';

type ProfilePictureProps = {
  profile?: Profile;
  isProfileLoading: boolean;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ profile, isProfileLoading }) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  if (!profile || isProfileLoading) {
    return <Skeleton width={300} height={400} />
  }
  return (
    <div>
      {isImageLoading && <Skeleton width={300} height={400} />}
      <Image
        onLoadingComplete={() => {
          console.log('loaded');
          setIsImageLoading(false)
        }}
        src={profile.image.src}
        alt={profile.image.alt}
        width={300}
        height={300}
        layout='responsive'
        priority
      />
    </div>
  );
};