import { ReactNode } from "react"
import { Image, Organisation, Link, Skill } from "./common";

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

export interface ProjectProps {
    image: Image;
    title: string;
    description: ReactNode;
    links: Link[];
    technologies: string[];
}

export interface ExperienceProps {
    title: string;
    date: string;
    organisation: Organisation
    description: string;
    technologies: string[];
}

export interface SkillsProps {
    skills: Skill[];
}

export interface SkillProps {
    image: Image;
    name: string;
}