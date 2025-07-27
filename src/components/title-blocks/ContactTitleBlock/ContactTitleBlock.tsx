import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

import { TitleBlock } from '@/components/ui/TitleBlock';
import { LinkButton } from '@/components/ui/Button';
import { appConstants } from '@/lib/constants';

import styles from './ContactTitleBlock.module.scss';

export const ContactTitleBlock: React.FC = () => {
  return (
    <TitleBlock title='Contact'>
      <p className={styles.description}>
        I’m always up to chat about computers, games, or cool projects to work on together.
        If you’re curious about something I’ve built or just want to say hi, feel free to reach out on whatever platform works best for you.
      </p>
      <div className={styles.socials}>
        <LinkButton href={appConstants.socialUrls.github} icon={<FaGithub />}>GitHub</LinkButton>
        <LinkButton href={appConstants.socialUrls.linkedin} icon={<FaLinkedinIn />}>LinkedIn</LinkButton>
        <LinkButton href={`mailto:${appConstants.socialUrls.emailAddress}`} icon={<FaEnvelope />}>{appConstants.socialUrls.emailAddress}</LinkButton>
      </div>
    </TitleBlock>
  );
};