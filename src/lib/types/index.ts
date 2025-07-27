import React from 'react';

export type Direction = 'horizontal' | 'vertical';
export type ButtonType = 'primary' | 'default' | 'link';
export type Placement = 'left' | 'center' | 'right';

export type Link = {
  icon: React.ReactNode;
  href: string;
}

export type Tag = {
  icon?: React.ReactNode;
  text: string;
}

export type Technology = {
  name: string;
}

export type Image = {
  src: string;
  alt: string;
}

export type Profile = {
  image: Image;
}

export type SkillSet = {
  title: string;
  icon: React.ReactNode;
  skills: Tag[];
  sortOrder: number;
}

export type PortfolioItem = {
  image?: Image;
  title: string;
  titleLink?: string;
  subtitle?: string;
  subtitleLink?: string;
  startDate: Date;
  endDate?: Date;
  description?: React.ReactNode;
  tags: Tag[];
  extraLinks: Link[];
  onGoing: boolean;
  sortOrder: number
}