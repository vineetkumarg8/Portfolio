import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience 
                      </h2>
                      <h5>
                          Atlas Apps <span>June(2023)-December(2023)</span>
                      </h5>
                      
                      <p>
                        I worked as <b> Software Developer </b> at{' '}
                         <a target='_blank' href='https://atlasapps.co.uk/'>
                            <b>Atlas Apps</b>
                         </a>{' '}
                         <br></br>
                        <i>
                      - Designed and developed web application with functionable UI cmponents and its integration with backend in Nodejs
                      <br></br>
                      - Collaborated closely with the design team to transform wireframes and mock-ups into functional user interfaces, providing valuable input on UI/UX best practices to optimize user interaction and satisfaction.
                      <br></br>
                      - Integrated with backend services , Restful APIs , and third-party libraries.
                      <br></br>
                     <hr></hr> 
                        <b>Skills:</b> React js, Node js, Express js,Postgres,Figma
                      </i>
                      </p>
                      <h5>
                          Highradius Corporation <span>January(2022)-September(2022)</span>
                      </h5>
                      <p>
                        I worked as <b>Software Intern</b> at{' '}
                        <a target='_blank' href='https://www.highradius.com/'>
                          <b>Highradius</b>
                        </a>{' '}
                        <br></br>
                        <i>
                        
                        
                          - Contributed to the development and enhancement of tools aimed at streamlining the order-to-cash process for businesses within the Autonomous Receivables team.
                          <br></br>
                          - Played a key role in the implementation of React components, ensuring strict adherence to design guidelines and maintaining consistent user experience across the application.
                          <br></br>
                         
                          - Worked alongside senior developers to integrate RESTful APIs in Java, facilitating seamless communication between client-side and server-side components, thus enhancing overall application performance.
                          <br></br>
                          - Actively engaged in agile methodologies, particularly Scrum, throughout the development lifecycle, ensuring effective project management, efficient collaboration, and timely delivery of features to meet client requirements.
                          and boosting my professional skills.
                          <br></br>
                          <hr></hr>
                          <b>Skills:</b> Full-Stack Development · Web Technologies · Java · JavaScript · Redux.js · REST APIs · MySQL · RDBMS · Amazon Web Services (AWS) · Jira · Node.js · Software Development · SQL · Databases · Agile Methodologies
                        </i>{' '}
                       
                      </p>
                    
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        B.Tech at KIIT (Kalinga Institute of Industrial Technology) <span>2019-2023</span>
                        <h4><span>Bhubaneswar</span></h4>
                      </h2>
                     
                      <p>
                        I completed my undergraduation in IT(Information Technology)
                        from <a href='https://kiit.ac.in/'>KIIT University</a> with overall 8.63 cgpa.
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        12th from DAV Public school BSEB
                      </h2>
                      <p>
                        I have completed my higher education 
                        from <a href='https://davbsebpatna.org/'>DAV BSEB </a> with major subjects as
                        Physics,Chemistry & Maths with 76.6% in CBSE board.{' '}
                      </p>
                      <h2>
                        10th from DAV public School BSEB
                      </h2>
                      <p>
                        I got 9.4 CGPA in 10th CBSE Boards
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Organisations</h2>
                      <p><b> <a href = 'https://www.linkedin.com/company/msckiit/?originalSubdomain=in'>Microsoft Student Community, KIIT</a></b> 
                        <br></br>
                        Learn about frontend development,javascript and its library like reactjs.
                        <br></br>
                        Collaborated in design and development,organising events and hackathons.</p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
