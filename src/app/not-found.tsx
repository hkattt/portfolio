import React from 'react';

import { ResultPage } from '@/components/pages/ResultPage';
import { LinkButton } from '@/components/ui/Button';
import { appConstants } from '@/lib/constants';

const NotFound: React.FC = () => {
  return(
    <ResultPage title='NOT FOUND' subtitle='ERROR 404'>
      <LinkButton type='primary' href={appConstants.routes.home} target='_self'>
        Take me home
      </LinkButton>
    </ResultPage>
  );
};

export default NotFound;