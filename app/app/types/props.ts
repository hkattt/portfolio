import { ReactNode } from "react"
import { Image, Organisation, Link } from "./common";

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
}

export interface ExperiencesProps {
    experiences: ExperienceProps[];
}

export interface ExperienceProps {
    title: string;
    date: string;
    organisation: Organisation
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