import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/Hello.jpg';
import Pencil from '../images/Pencil.jpg';
import { motion } from 'framer-motion';

export default function CarouselImage() {
  return (
    <div id='start'>
      <Carousel
        dynamicHeight
        infiniteLoop={true}
        interval={6000}
        useKeyboardArrows={true}
        transitionTime={1700}
        emulateTouch
        showArrows={false}
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img className={classes.image} src={Hello} alt='myImage' />
          <div className={classes.h1}>
            I'm Vineet
            <motion.h1
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }} // Define the scale values for the bouncing effect
              transition={{ duration: 3.3, repeat: Infinity }} // Set the duration and repeat
              whileHover={{
                scale: 1.1
              }}
            >
              <a
                href='https://drive.google.com/file/d/1n7Y62iWWE7nb20WZWqChkrtM9pSFIARn/view?usp=drive_link'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </motion.h1>
          </div>
        </div>
        <div>
          <img className={classes.image} src={Pencil} alt='myImage' />
          <div className={classes.h2}>
            <h1> I love building</h1>
            <h1>THINGS!!</h1>
            <a
              href='https://github.com/vineetkumarg8?tab=repositories&q=&type=&language=javascript&sort='
              rel='opener noreferrer'
              target='_blank'
            >
              REACT PROJECTS <GoProject />
            </a>
            <div className={classes.secondButton}>
              <a
                href='https://github.com/vineetkumarg8?tab=repositories&q=&type=&language=typescript&sort='
                rel='opener noreferrer'
                target='_blank'
              >
               FullStack PROJECTS <GoProject />
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
