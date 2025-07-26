type KeyValues = {
  [key: string]: string;
}

type Constants = {
  socialUrls: KeyValues;
  collections: KeyValues;
}

export const appConstants: Constants = {
  socialUrls: {
    emailAddress: 'hugo.kat3@gmail.com',
    githubUrl:    'https://github.com/hkattt',
    linkedinUrl:  'https://www.linkedin.com/in/hugo-kat'
  },
  collections: {
    projects: 'projects',
    experiences: 'experiences',
    education: 'education',
  }
}