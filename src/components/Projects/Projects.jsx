import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import shopping from '../images/shopping-app.png';
import travel from '../images/travel-log.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import superhero from '../images/superhero.png';
import monorepo from '../images/monorepo.png';
import profilee from '../images/profilee.png';
import courseApp from '../images/courseApp.png';
import chatGPT from '../images/chatGPT.png';
import challenges from '../images/frontend-challenges.png';
import github from '../images/github.png';
import retailstore from '../images/retailstore.png';
import Productdetails from '../images/productdetails.png';
import Map from '../images/map.png';
import Invoice from '../images/Invoice.png';

// Web projects
const webItem = [
  {
    link: 'https://www.profilee.info/',
    title: 'Profilee - An OS link in bio',
    techStack: 'Tech Stack: Next JS, Tailwind, Typescript, Prisma, AWS S3',
    desc: 'Profilee is an open source profile link bio page builder',
    image: profilee,
    color: '#00CCFF',
    // githubLink: 'https://github.com/mittalsam98/profilee'
  },
  {
    link: 'https://www.youtube.com/watch?v=wJDmXz3vd8Y',
    title: 'E-Commerce app',
    techStack: 'Tech Stack: Monorepo, Typescript, MERN',
    desc: 'It is a e-commerce app built in a MERN stack using Monorepo. This is 100% typescript.',
    image: monorepo,
    color: '#0FFFFF',
    githubLink: 'https://github.com/vineetkumarg8/E-commerce-App/tree/main'
  },
  {
    link: 'https://drive.google.com/file/d/1ma4deNGn0aF4oW27GTSH0jssG5VfT-LU/view?usp=drive_link',
    title: 'Invoice Management App',
    techStack: 'Tech Stack: React js , Java ,Mysql,ML',
    desc: 'It is a e-commerce app built in a React. This is 100% Javascript.',
    image: Invoice,
    color: '#ffcba4',
    githubLink: 'https://github.com/vineetkumarg8/AI-Enabled-B2B-FINTECH-Management/tree/main'
  },
  // {
  //   link: 'https://courses-portal.netlify.app/',
  //   title: 'Course Selling App',
  //   techStack: 'Tech Stack: React JS, Tailwind CSS, Node JS, MongoDB, Razorpay for payments',
  //   desc: 'Separate User and Admin panels, User can purchase courses',
  //   image: courseApp,
  //   color: '#C1A4AA',
  //   githubLink: 'https://github.com/mittalsam98/Course-Selling-App'
  // },
  // {
  //   link: 'https://chit-chat-gpt-app.vercel.app/',
  //   title: 'ChatGPT clone',
  //   techStack:
  //     'Tech Stack: Next.js 13, Tailwind CSS, Prisma, ZOD for validation, Recoil for state managements, TypeScript, OpenAI',
  //   desc: 'Chat GPT clone with signup and signin, previous chat save functionality',
  //   image: chatGPT,
  //   color: '#FFA6C9',
  //   githubLink: 'https://github.com/mittalsam98/chat-gpt-clone'
  // },
  // {
  //   link: 'https://frontend-questions.netlify.app/',
  //   title: 'Frontend Challenges',
  //   techStack: 'Tech Stack: Pure HTML, CSS and JS',
  //   desc: 'Frontend challenges in vanilla HTML,CSS and JS',
  //   image: challenges,
  //   color: '#a9def9',
  //   githubLink: 'https://github.com/mittalsam98/frontend-challenges'
  // },
  {
    link: 'https://chess-web-online.netlify.app/',
    title: 'Realtime Online Chess',
    techStack: 'Tech Stack- ReactJs, NodeJS, Express, Socket.io.',
    desc: 'Play real time chess with your friends online by sharing a link.',
    image: chess,
    color: '#d5ebda',
    githubLink:
      'https://github.com/vineetkumarg8/Chess-frontend/tree/main'
  },
  // {
  //   link: 'https://bookheap-app.netlify.app/',
  //   title: 'Online Book Store',
  //   techStack: 'Tech Stack: MERN Stack',
  //   desc: 'It is a book selling web app built in a MERN stack . You can sell books by uploading images and can also see what others are selling.',
  //   image: bookheap,
  //   color: '#f3e4f1',
  //   // githubLink:
  //   //   'https://github.com/mittalsam98?tab=repositories&q=bookheap&type=&language=javascript&sort=stargazers'
  // },
  // {
  //   link: 'https://travel-log-frontend-two.vercel.app/',
  //   title: 'Travel Log',
  //   techStack: 'Tech Stack- MERN Stack, Mapbox',
  //   desc: 'A full stack application to store / list places you have visited. You can log every visit on map.',
  //   image: travel,
  //   color: '#EEA47F',
  //   // githubLink:
  //   //    'https://github.com/mittalsam98?tab=repositories&q=travel&type=&language=javascript&sort=stargazers'
  // },
  {
    link: 'https://retail-store-management-system.netlify.app/',
    title: 'Retail-store-management-system',
    techStack: 'Spring mvc,nextflow,mysql',
    desc: 'A full stack application to buy/sell commodity',
    image: retailstore,
    color: '#D8BFD8',
    githubLink:
      'https://github.com/vineetkumarg8/Store-Management-System?tab=readme-ov-file'
  },
  {
    link: 'https://task-project-frontend.netlify.app/',
    title: 'Product and Services details',
    techStack: 'React js,Vite js,Node js,Postgre database,',
    desc: 'A full stack application to watch products/services details',
    image: Productdetails,
    color: '#6495ED',
    githubLink:
      'https://github.com/vineetkumarg8/Task_Project_Frontend-main'
  },
  {
    link: 'https://github.com/vineetkumarg8/Hosing-price/blob/main/Housingpriceprediction.ipynb',
    title: 'Housing Price',
    techStack: 'python,jupyter Notebook,Numpy,pandas,Seaborn,folium,Ipywidget,Sklearn',
    desc: 'Prediction Model',
    image: Map,
    color: '#F08080',
    githubLink:
      'https://github.com/vineetkumarg8/Hosing-price?tab=readme-ov-file'
  }
  
];

const androidAppItems = [
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.your_dictionary',
    title: 'Definition Finder',
    techStack: 'Tech Stack: Flutter',
    desc: 'Definition Finder is absolutely free online dictionary with every word you look up. Millions of definitions from the most trusted source.',
    image: definition,
    color: '#CBD18F',
    // githubLink:
    //   'https://github.com/mittalsam98?tab=repositories&q=&type=&language=dart&sort=stargazers'
  },
  
 
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              window.open(cardItem.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            <img src={github} className={classes.card__title__img} />
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
      <ul className={classes.cards}>
        {androidAppItems.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      {/* </ScrollAnimation> */}
    </div>
  );
}
