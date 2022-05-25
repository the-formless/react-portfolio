//contains data for my projects

import chessImg from './assets/chess_project.png'
import ultimateTTT from './assets/ultiTTT.png'
import airlift1 from './assets/airlift1.png'
import airlift2 from './assets/airlift2.png'
import airlift3 from './assets/airlift3.png'
import _2dstar from './assets/2dstarsystem.png'
import {FaReact, FaUnity, FaHtml5, FaCss3, FaJs, FaSass} from 'react-icons/fa'
import {SiCsharp, SiFirebase} from 'react-icons/si'

const tech = {
  react: {
    icon: <FaReact/>,
    text: 'React'
  },
  unity: {
    icon: <FaUnity/>,
    text: 'Unity'
  },
  html: {
    icon: <FaHtml5/>,
    text: 'HTML5'
  },
  css: {
    icon: <FaCss3/>,
    text: 'CSS3'
  },
  sass: {
    icon: <FaSass/>,
    text: 'Sass'
  },
  js: {
    icon: <FaJs/>,
    text: 'JavaScript'
  },
  csharp: {
    icon: <SiCsharp/>,
    text: 'C#'
  },
  firebase: {
    icon: <SiFirebase />,
    text: 'Firebase'
  }
};

 export const projects = [{
  title: 'React Portfolio',
  images: ["any"],
  link: '',
  github: 'https://github.com/the-formless/react-portfolio',
  description: 'A SPA built entirely in React. You\'re looking at it right now. Use of good project structure and components. Styling with SASS.',
  technologies: [tech.react, tech.js, tech.html, tech.sass],
  blog: '' 
  },
  {
    title: 'Realtime Multiplayer Chess',
    images: [chessImg],
    link: 'https://moonlit-fox-037c4a.netlify.app/',
    github: 'https://github.com/the-formless/chess-in-react',
    description: 'An online chess app built with chess.js API, allows user to play locally as well as realtime with friends.',
    technologies: [tech.react, tech.firebase, tech.js, tech.css],
    blog: '' 
  },
  {
    title: 'Ultimate Tic Tac Toe',
    images: [ultimateTTT],
    link: 'https://the-formless.github.io/ultimate-tic-tac-toe/',
    github: 'https://github.com/the-formless/ultimate-tic-tac-toe',
    description: 'A 2-player strategy game of multi-dimensional Tic Tac Toe. Check the demo video on Github by clicking View Code.',
    technologies: [tech.react,  tech.js, tech.html,tech.css],
    blog: '' 
  },
  {
    title: 'Airlift (Mobile Game)',
    images: [airlift1, airlift2, airlift3],
    link: 'https://ticklinggenre.itch.io/airlift',
    github: '',
    description: 'A Mobile game developed with Unity Game Engine and C#. Implements Google Play API to manage in-game achievements and global player leaderboard.',
    technologies: [tech.unity,  tech.csharp],
    blog: '' 
  },
  {
    title: '2D Star System Simulator',
    images: [_2dstar],
    link: '',
    github: 'https://github.com/the-formless/2d-star-system-sim',
    description: 'A desktop app developed with Unity Game Engine and C#. Implements OOP and State-Pattern. Read the blog to get an insight into how I approach problems.',
    technologies: [tech.unity,  tech.csharp],
    blog: 'https://ticklinggenre.itch.io/2d-star-system-simulator/devlog/366374/a-project-to-implement-learnt-design-patterns' 
  }
];