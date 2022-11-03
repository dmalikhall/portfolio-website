import React from 'react';
import clothingMain from '../clothing-main-img.png';
import homeBlog from '../blog-home-image.png'
import { FaReact } from 'react-icons/fa'

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
                            <img src={clothingMain} alt="website" />
                        </div>

                        <div className="project-info">
                            <div className="languages">
                                <FaReact />
                            </div>
                            <div className="project-desc">
                                <h3>Paradise Clothing Project</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur mollitia, rerum cum obcaecati deleniti ipsa cupiditate nesciunt saepe commodi, dolores excepturi voluptatem cumque. Ut officia nobis qui provident repellat.</p>
                                <div className="desc-button">
                                    
                                        <a href='https://paradiseclothing.netlify.app' target='_blank' rel="noreferrer">
                                            <button>See Website</button>
                                        </a>
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                    <div  className="project">
                        <div className="main-image">
                            <img src={homeBlog} alt="website" />
                        </div>
                        <div className="project-info">
                            <div className="languages">
                                <FaReact />
                            </div>
                            <div className="project-desc">
                                <h3>Webb INC Project</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur mollitia, rerum cum obcaecati deleniti ipsa cupiditate nesciunt saepe commodi, dolores excepturi voluptatem cumque. Ut officia nobis qui provident repellat.</p>
                                <div className="desc-button">
                                    <a href='https://webbinc.netlify.app/' target='_blank' rel="noreferrer" className='desc-button-btn'>
                                        <button >See Website</button>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>


            </section>





        </main>
    )
}

export default Projects