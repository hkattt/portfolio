import React from 'react';

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
  width: number;
  height: number;
}

export type SkillSet = {
  title: string;
  icon: React.ReactNode;
  skills: Tag[];
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