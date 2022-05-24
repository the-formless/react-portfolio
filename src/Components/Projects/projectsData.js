import chessImg from './assets/chess_project.png'
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
    title: 'Realtime Multiplayer Chess',
    img: chessImg,
    link: 'https://moonlit-fox-037c4a.netlify.app/',
    github: 'https://github.com/the-formless/chess-in-react',
    description: 'An online chess app built with chess.js API, allows user to play locally as well as realtime with friends.',
    technologies: [tech.react, tech.firebase, tech.js, tech.css],
    blog: '' 
  }];