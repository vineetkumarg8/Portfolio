import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! My name is <b>VINEET KUMAR</b>. I am a passionate Exgineer having experience in{' '}
            <b>Frontend</b> & <b>Full Stack </b> development complemented by machine learning expertise and
            I'm currently a part of ATA{' '}
            <b>
              <a className={classes.link} target='_blank' href='https://www.akamai.com/'>
                Akamai Technology
              </a>
            </b>{' '}
            as a <b>Apprenticeship Trainee.</b> I am much interested in Learning and developing new things
            which excite me a lot. :)
          </p>
          <p className={classes.br}>
            I love exploring new technologies and being a practitioner, I like to stay on top of
            latest trends. I try to leave every line of code I write more readable, accessible, and
            modular. My problem-solving mindset and my internship experience showcase my commitment to
            innovative and collaborative coding.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
