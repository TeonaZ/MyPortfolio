import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to My Portfolio</h1>
                <p>I'm Teona Zaalishvili, a [Your Profession] based in [Your Location].</p>
            </header>
            <section className="intro">
                <p>
                    I specialize in [Your Specialization], with a passion for creating
                    elegant and efficient digital solutions. Have a look around to see my work
                    and what I can do!
                </p>
            </section>
            <nav className="home-nav">
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default HomePage;
