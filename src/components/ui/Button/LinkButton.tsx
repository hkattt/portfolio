import React from 'react';
import Link from 'next/link';

import { Button } from './Button';
import type { ButtonType, Placement } from '@/lib/types';

type LinkButtonProps = {
  type?: ButtonType;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPlacement?: Placement;
  href: string;
  target?:  React.HTMLAttributeAnchorTarget;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ type = 'link', children, icon, iconPlacement = 'left', href, target = '_blank'}) => {
  return (
    <Link
      href={href}
      target={target}
      rel='noopener noreferrer'
    >
      <Button type={type} icon={icon} iconPlacement={iconPlacement}>
        {children}
      </Button>
    </Link>
  );
};