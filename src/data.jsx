import { nanoid } from 'nanoid'
import {
  FaAngular,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'

import firebaseSvg from '../public/assets/Logomark_Monochrome_Optimized_White.svg'
import mondoDbsvg from '../public/assets/MongoDB_White.svg'
import NextJS from '../public/assets/NextJS.png'
import azureSvg from '../public/assets/Pictogrammers-Material-Microsoft-azure-devops.svg'
import WebWise from '../public/assets/WebWise.png'
import androidstudioSvg from '../public/assets/androidstudio-svgrepo-com.svg'
import awsSvg from '../public/assets/aws-svgrepo-com.svg'
import backroads from '../public/assets/backroads.png'
import gaSvg from '../public/assets/brand-google-analytics.svg'
import figmaSvg from '../public/assets/figma-logo-svgrepo-com.svg'
import flutterSvg from '../public/assets/icon_flutter_solid.svg'
import kubernetesSvg from '../public/assets/kubernetes.svg'
import myblog from '../public/assets/myblog.png'
import reactnativeSvg from '../public/assets/react.svg'
import recipemagic from '../public/assets/recipe-magic.png'
import tailwindSvg from '../public/assets/tailwind.svg'
import unsplash from '../public/assets/unsplash.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },

  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#education', text: 'education' },
  { id: nanoid(), href: '#experience', text: 'experience' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-12 w-12 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-12 w-12 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-12 w-12 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: 'Angular',
    icon: <FaAngular className="h-12 w-12 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className="h-12 w-12 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: 'NodeJs',
    icon: <FaNodeJs className="h-12 w-12 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className="h-12 w-12 text-sky-500" />,
  },
  {
    id: nanoid(),
    title: 'Flutter',
    icon: <img src={flutterSvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <img src={mondoDbsvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'Firebase',
    icon: <img src={firebaseSvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'Google Analytics',
    icon: <img src={gaSvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'React Native',
    icon: <img src={reactnativeSvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'Android Studio',
    icon: <img src={androidstudioSvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'Figma',
    icon: <img src={figmaSvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'AWS',
    icon: <img src={awsSvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'Azure',
    icon: <img src={azureSvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'Kubernetes',
    icon: <img src={kubernetesSvg} className="h-12 w-12" />,
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <img src={tailwindSvg} className="h-12 w-12" />,
  },
]

export const projects = [
  {
    id: nanoid(),
    icon: (
      <img
        src={unsplash}
        alt="unsplash"
        className="w-full object-cover rounded-t-lg h-64 "
      />
    ),
    url: 'https://sahithya-unsplash-images.netlify.app/',
    github: 'https://github.com/Sahithya-01/unsplash-images',
    title: 'Unsplash Images',
    tags: ['Unsplash API', 'React.js', 'React Query'],
    text: `This project is a React application that allows users to search for images using the Unsplash API and view them in a gallery format. The application supports a dark theme toggle and remembers the user's theme preference using local storage. The project also leverages React Query for efficient data fetching and caching`,
  },
  {
    id: nanoid(),
    icon: (
      <img
        src={myblog}
        alt="myblog"
        className="w-full object-cover rounded-t-lg h-64 "
      />
    ),
    url: '',
    github: 'https://github.com/Sahithya-01/MERN-PROJECT',
    title: 'My Blog',
    tags: ['MERN Stack', 'Firebase'],
    text: 'The project involves a MERN stack blog application. The project includes various pages for navigation. Key functionalities are loading articles, displaying them, allowing users to upvote articles using an upvote button, and enabling users to add comments through a dedicated comment form.',
  },
  {
    id: nanoid(),
    icon: (
      <img
        src={WebWise}
        alt="Web Wise"
        className="w-full object-cover rounded-t-lg h-64 "
      />
    ),
    url: '',
    github: 'https://github.com/Sahithya-01/WebWise-Chatbot',
    tags: ['Next.Js', 'Redis', 'Chatbot', 'AI'],
    text: `A Next.js chat application featuring a dynamic chat interface that integrates with an AI backend and uses Redis for session management. Users can interact with the chat by navigating to specific URLs. The application includes components for handling user input, displaying messages, and managing chat sessions.`,
  },
  {
    id: nanoid(),
    icon: (
      <img
        src={recipemagic}
        alt="recipemagic"
        className="w-full object-cover rounded-t-lg h-64 "
      />
    ),
    url: '',
    github:
      'https://github.com/Sahithya-01/flutter_projects/tree/master/recipe_magic',
    title: 'Recipe Magic',
    tags: ['Flutter', 'Dart', 'dio', 'dummyjson'],
    text: `A cross-platform Flutter app for exploring and managing recipes, showcasing fundamental concepts like Widgets, State Management, and Navigation.`,
  },
  {
    id: nanoid(),
    icon: (
      <img
        src={NextJS}
        alt="NextJS"
        className="w-full object-cover rounded-t-lg h-64 "
      />
    ),
    url: '',
    github: 'https://github.com/Sahithya-01/NextJs',
    title: 'Next JS',
    tags: ['Next JS', 'React JS', 'routing'],
    text: `This Next.js app is a modern web application with dynamic routing, optimized performance, and enhanced SEO using TailwindCSS, responsive images, and Google Fonts. It features a clean folder structure, server-side data fetching, and an interactive Navbar for easy navigation.`,
  },
  {
    id: nanoid(),
    icon: (
      <img
        src={backroads}
        alt="backroads"
        className="w-full object-cover rounded-t-lg h-64 "
      />
    ),
    url: 'https://sahithya-backroads-app.netlify.app/',
    github:
      'https://github.com/Sahithya-01/flutter_projects/tree/master/recipe_magic',
    title: 'Backroads App',
    tags: ['React.js', 'Smooth Scroll', 'Responsive Web Design'],
    text: 'Backroads App is a dynamic and responsive React application . It features smooth scrolling navigation, dynamically generated page links, and social media integration. With sections for showcasing services, tours, and more, Backroads App offers a modern and user-friendly experience for its audience.',
  },
]
