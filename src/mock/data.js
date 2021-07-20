import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chris Guy | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hi! I am a self taught frontend developer from the UK', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Chris Guy',
  subtitle: 'I am a self-taught developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_c.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'yahtzee.png',
    title: 'Yahtzee Game',
    info: 'A yahtzee game built out with vanilla JS.',
    info2:
      'I started a course to refresh my understanding of JavaScript and decided to adapt one of the simple "dice game" projects into one that handles some more logic. ',
    tech: ['html', 'css', 'js'],
    url: 'https://chrisguy.github.io/Yahtzee/',
    repo: 'https://github.com/ChrisGuy/Yahtzee', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
