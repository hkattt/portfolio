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
        I am always eager to have a chat about tech and other things
      </p>
      <div className={styles.socials}>
        <LinkButton href={appConstants.socialUrls.github} icon={<FaGithub />}>GitHub</LinkButton>
        <LinkButton href={appConstants.socialUrls.linkedin} icon={<FaLinkedinIn />}>LinkedIn</LinkButton>
        <LinkButton href={appConstants.socialUrls.emailAddress} icon={<FaEnvelope />}>{appConstants.socialUrls.emailAddress}</LinkButton>
      </div>
    </TitleBlock>
  );
};