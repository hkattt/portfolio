import React from 'react';

import { ResultLayout } from '@/components/layout';
import { LinkButton } from '@/components/ui/Button';
import { appConstants } from '@/lib/constants';

const NotFound: React.FC = () => {
  return(
    <ResultLayout title='NOT FOUND' subtitle='ERROR 404'>
      <LinkButton type='primary' href={appConstants.routes.home} target='_self'>
        Take me home
      </LinkButton>
    </ResultLayout>
  );
};

export default NotFound;