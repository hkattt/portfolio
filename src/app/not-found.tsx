import React from 'react';

import { FaTimesCircle } from 'react-icons/fa';

import  { LinkButton } from '@/components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div>
      <FaTimesCircle size={96} />
      <h2>ERROR 404</h2>
      <h1>PAGE NOT FOUND</h1>
      <LinkButton href='/' target='_self'>Take me home</LinkButton>
    </div>
  );
};

export default NotFound;