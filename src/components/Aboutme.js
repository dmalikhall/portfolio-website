import React from 'react';
import logo from '../my-image.jpg';

const Aboutme = () => {
  return (
    <main className='about-content'>
        <section className='about-info'>
            <h1>About Me</h1>
            <p>Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime impedit obcaecati!</p>
        </section>
        <section className='my-image'>
            <img src={logo} alt=""  />
        </section> 
    </main>
  )
}

export default Aboutme