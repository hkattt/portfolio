'use client'

import React from 'react';
import { ResultLayout } from '@/components/layout';
import { Error as ErrorComponent } from '@/components/Error';
import { Button, LinkButton } from '@/components/ui/Button';
import { appConstants } from '@/lib/constants';

import styles from './error.module.scss';

type ErrorProps = {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <ResultLayout title='Sorry, we encountered an error'>
      <div className={styles.error}>
        <ErrorComponent message='' error={error} />
        <div className={styles.buttons}>
          <Button type='primary' onClick={reset}>
            Try again
          </Button>
          <LinkButton type='default' href={appConstants.routes.home} target='_self'>
            Take me home
          </LinkButton>
        </div>
      </div>
    </ResultLayout>
  );
};

export default Error;