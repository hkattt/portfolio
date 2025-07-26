import React from 'react';

export type Link = {
  icon: React.ReactNode;
  href: string;
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

export type PortfolioItem = {
  image?: Image;
  title: string;
  titleLink?: string;
  subtitle?: string;
  subtitleLink?: string;
  startDate: Date;
  endDate?: Date;
  description?: React.ReactNode;
  tags: string[];
  extraLinks: Link[];
  onGoing: boolean;
  sortOrder: number
}