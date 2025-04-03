import { ReactNode } from "react"
import { Image, Link } from "./common";

export interface IconButtonProps {
    image: Image;
    link: string;
}

export interface RedirectLinkProps {
    title: string;
    href: string;
}

export interface TechnologyPillProps {
    name: string;
}

export interface TechnologyPillsProps {
    technologies: TechnologyPillProps[];
}

export interface ProjectsProps {
    projects: ProjectProps[];
}

export interface ProjectProps {
    image: Image;
    title: string;
    description: ReactNode;
    links: Link[];
    technologies: TechnologyPillProps[];
    sortOrder: number
}

export interface ExperiencesProps {
    experiences: ExperienceProps[];
}

export interface ExperienceProps {
    title: string;
    date: string;
    organisation: Link;
    description: string;
    technologies: TechnologyPillProps[];
}

export interface SkillsProps {
    skills: SkillProps[];
}

export interface SkillProps {
    image: Image;
    name: string;
}

export interface AttributionProps {
    image: Image;
    icon: Link;
    license: Link;
}

export interface AttributionsProps {
    attributions: AttributionProps[];
}