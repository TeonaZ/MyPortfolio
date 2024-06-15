import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from '../components/heading';
import TSU from "../assets/TSU.png";
import NYU from "../assets/NYU.png";
import h2 from "../assets/h2.png";
import EducationBox from "../components/EducationBox";



const AboutMe = () => {
  return (
    <div className="about-container">
       <Container>
        <Row className='flex-lg-row flex-column'>
        
          <Col className='about-us-content'>
            <div className='mb-3'>
              <Heading title='About Me' />
            </div>
            <p className='sub-heading'>
            Highly skilled and results-oriented Software Engineer with over 2 years of experience in developing and managing web applications. Proficient in a wide array of technologies including JavaScript, TypeScript, Node.js, React, SQL, MongoDB, and HTML/CSS. Demonstrated expertise in utilizing Quality Center and Selenium for test automation, and JIRA for efficient project management within AGILE frameworks. Adept at designing and testing APIs with Postman and maintaining robust version control using Git/GitHub. Strong background in cybersecurity, with a proven track record of implementing best practices to ensure application security and integrity. Excellent problem-solving abilities and a collaborative team player, committed to continuous learning and improvement.
            </p>
            <ListGroup>
              <ListGroup.Item className='d-flex align-items-center'>
                <div className='check'>
                  <svg width='21' height='12' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.91273 17.2739L2.87296 10.4609L0.526367 12.7319L9.91273 21.8159L30.0264 2.35012L27.6798 0.0791016L9.91273 17.2739Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p>Technologies include HTML, CSS, JavaScript, Typescript, React, Redux, and AWS</p>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex align-items-center'>
                <div className='check'>
                  <svg width='21' height='12' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.91273 17.2739L2.87296 10.4609L0.526367 12.7319L9.91273 21.8159L30.0264 2.35012L27.6798 0.0791016L9.91273 17.2739Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p>Certifications  <ul> <li>NYU BOOTCAMP - Software Engineer</li> <li>Certifications KInfosys - Quality Assurance</li></ul></p>
              
              </ListGroup.Item>
              <ListGroup.Item className='d-flex align-items-center'>
                <div className='check'>
                  <svg width='21' height='12' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.91273 17.2739L2.87296 10.4609L0.526367 12.7319L9.91273 21.8159L30.0264 2.35012L27.6798 0.0791016L9.91273 17.2739Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p>
                  Favorite empathy concepts include understanding needs, communicating diplomatically, setting healthy boundaries, and connecting with
                  people in meaningful ways.
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className='heading'>
          <Heading title='Education ' />
        </div>
        <Row className='justify-content-center'>
          <EducationBox img={TSU} title='Bachelor of Law' description='Tbilisi State University' />
          <EducationBox img={NYU} title='Software Engineer' description='NYU Bootcamp' />
          <EducationBox img={h2} title='Quality Assurance' description='H2Kinfosys, LLC' />
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;

