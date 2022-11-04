import React from 'react';
import logo from '../my-image.jpg';

const Aboutme = () => {
  return (
    <main className='about-content' id='about'>
      <section className='about-info'>
        <h1>About Me</h1>
        <p>The reason I have a strong passion for the field of web development is because it doesn’t matter what you
          look like, your background, your culture, or your education. </p>
        <p>As long as you are willing to learn, adapt, and
          better yourself you are welcomed. I look forward to building amazing
          relationships, bringing value, and giving my best each day.</p>
        <p>The opportunities are endless and that is what truly excites me.</p>
      </section>
      <section className='my-image'>
        <img src={logo} alt="" />
      </section>
    </main>
  )
}

export default Aboutme