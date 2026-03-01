import React from 'react';

import { TitleBlock } from '@/components/ui/TitleBlock';
export const HomeTitleBlock: React.FC = () => {
  return (
    <TitleBlock title='Hugo Kat' subtitle='SOFTWARE DEVELOPER'>
      <p>
        By day, I build thoughtful user interfaces and implement business logic into APIs as a full-stack developer.
        Outside of work, I explore computer systems with particular interests in computer graphics, operating systems, and software security.
        I am also an avid gamer and enjoy channeling this passion by participating in as many game jams as possible.
      </p>
    </TitleBlock>
  );
};