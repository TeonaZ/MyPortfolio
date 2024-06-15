import React from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const HomePage = () => {
    return (
        <div className="home">
            <Container>
        <Row className='flex-column-reverse flex-lg-row'>
          <Col className='home-content text-lg-start text-center'></Col>
            <header className="home-header">
                <h1>Welcome to My Portfolio</h1>
                <p>I'm Teona Zaalishvili,I’m a full-stack software engineer with a passion for empathy and a love for understanding how businesses can deliver greater value to
              the people they serve. </p>
            </header>
            <section className="intro">
                <p>
                    I specialize in [Your Specialization], with a passion for creating
                    elegant and efficient digital solutions. Have a look around to see my work
                    and what I can do!
                </p>
            </section>
            <div className='' style={{ display: "inline-block" }}>
                <Button href={"https://github.com/TeonaZ?tab=repositories"} className='custom-btn'>
                  Github
                </Button>
              </div>
              </Row>
      </Container>
             
        </div>
    );
};

export default HomePage;
