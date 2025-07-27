'use client'

import React from 'react';
import { ResultPage } from '@/components/pages/ResultPage';
import { Button } from '@/components/ui/Button';

type ErrorProps = {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <ResultPage title='An unexpected error occured'>
      {error.message}
      <Button type='primary' onClick={reset}>
        Try again
      </Button>
    </ResultPage>
  );
};

export default Error;