import React from 'react';
import VideoBg from '../assets/backgroundbideo.mp4'
import '../styles/hero.css'
const Hero = () => {
  return (
    <div>
      {/* <div className='overlay'></div> */}
      <video className='video_bg' src={VideoBg} data-autoPlay autoPlay webkit-playsinline playsinline loop muted />
      <div className='content'>
        <p className='catchph'>Freelance-Designer-Devloper</p>
        <h1 className='Heading'>katapliktikós/ Visual Designer</h1>
        <p className='text'>"I'm Prabir Kalwani, a freelance Web Developer and App Developer based in Mumbai, India. My specialty is creating beautiful and functional websites and applications using various programming languages."</p>
      </div>
      </div>
  );
}

export default Hero;
