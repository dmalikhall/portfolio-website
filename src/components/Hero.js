import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <main className='hero-container' id='hero'>
            <section className='my-info'>
                <h2>Hello I'm Derrion Hall</h2>
                <p>Web Developer.
                    Using Wordpress, HTML, CSS, Javascript, and React to create responsive websites. I have a passion for web development and I am driven to reach my fullest potential.</p>

                <div className="hero-button">
                    <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>See Projects</button>

                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Hero