import React from 'react';
import clothingMain from '../clothing-main-img.png';
import homeBlog from '../blog-home-image.png';
import { FaReact } from 'react-icons/fa';
import {BsWordpress} from 'react-icons/bs'
// import nbaImg from '../my-nba-app-img.png';
import smoothServices from '../sss-img.png';

const Projects = () => {
    return (
        <main className='project-section' id='projects'>
            <section className='project-container'>
                <div className="title">
                    <h1>Projects</h1>
                </div>

                <div className="first-container">
                    <div className="project">
                        <div className="main-image">
                            <img src={smoothServices} alt="website" />
                        </div>
                        <div className="project-info webinc-desc">
                            <div className="languages">
                                <BsWordpress />
                            </div>
                            <div className="project-desc ">
                                <h3>Smooth Services Solutions</h3>
                                <p>This website was created for a client called Smooth Services Solutions, a business located in Nashville, TN. I was able to design and create this using Wordpress content management system.</p>

                            </div>
                        </div>

                        <div className="desc-button">
                            <a href='https://smoothservicessolutions.com/' target='_blank' rel="noreferrer" className='desc-button-btn'>
                                <button >See Website</button>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="main-image">
                            <img src={clothingMain} alt="website" />
                        </div>

                        <div className="project-info">
                            <div className="languages">
                                <FaReact />
                            </div>
                            <div className="project-desc">
                                <h3>Paradise Clothing Project</h3>
                                <p>The Paradise Clothing Project was built to utilize a cart component that allows users to add, remove, or modify the cart. The cart also calculates the total of each product depending on how many items they want and the price of each item.</p>

                            </div>
                        </div>

                        <div className="desc-button">
                            <a href='https://paradiseclothing.netlify.app' target='_blank' rel="noreferrer">
                                <button>See Website</button>
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="main-image">
                            <img src={homeBlog} alt="website" />
                        </div>
                        <div className="project-info webinc-desc">
                            <div className="languages">
                                <FaReact />
                            </div>
                            <div className="project-desc ">
                                <h3>Webb INC Project</h3>
                                <p>I built Webb Inc using React js, an external API, useReducer, Context, and React Router to create a single template that takes in different props depending on which article the user clicks on.</p>

                            </div>
                        </div>

                        <div className="desc-button">
                            <a href='https://webbinc.netlify.app/' target='_blank' rel="noreferrer" className='desc-button-btn'>
                                <button >See Website</button>
                            </a>
                        </div>
                    </div>


                </div>
            </section>
        </main>
    )
}

export default Projects