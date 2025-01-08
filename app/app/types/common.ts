export interface Image {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface Organisation {
    title: string;
    href: string;
}

export interface Link {
    title: string;
    href: string;
}

export interface Skill {
    image: Image;
    name: string;
}