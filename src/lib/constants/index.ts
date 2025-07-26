type KeyValues = {
  [key: string]: string;
}

type Constants = {
  socialUrls: KeyValues;
  collections: KeyValues;
  routes: KeyValues;
}

export const appConstants: Constants = {
  socialUrls: {
    emailAddress: 'hugo.kat3@gmail.com',
    github:    'https://github.com/hkattt',
    linkedin:  'https://www.linkedin.com/in/hugo-kat'
  },
  collections: {
    projects: 'projects',
    experiences: 'experiences',
    education: 'education',
  },
  routes: {
    home:     '/',
    about:    '/about',
    projects: '/projects',
    contact:  '/contact'
  }
}