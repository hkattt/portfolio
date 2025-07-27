'use client'

import React from 'react';
import { usePathname } from 'next/navigation';

import { SmartLink } from '@/components/ui/SmartLink';
import { appConstants } from '@/lib/constants';

export const NavigationBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      <SmartLink href={appConstants.routes.about} active={pathname === appConstants.routes.about}>About</SmartLink>
      <SmartLink href={appConstants.routes.projects} active={pathname === appConstants.routes.projects}>Projects</SmartLink>
      <SmartLink href={appConstants.routes.contact} active={pathname === appConstants.routes.contact}>Contact</SmartLink>
    </nav>
  );
};