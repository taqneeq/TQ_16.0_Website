import React from 'react';
import VideoBg from '../assets/backgroundbideo.mp4'
import '../styles/hero.css'
const Hero = () => {
  return (
    <div>
      {/* <div className='overlay'></div> */}
      <video className='video_bg' src={VideoBg} data-autoPlay autoPlay webkit-playsinline playsinline loop muted />
      <div className='content'>
      <p className='catchph'>NMIMS' Official Techfest</p>
        <h1 className='Heading'>Taqneeq</h1>
        <p className='text'>Over the years, Taqneeq has turned out to be an exceptional tech fest and has illuminated each & every aspect of Technology</p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdRDRxk4m7ssnKulu8ds3lnlQahtXYMJNM9RwURUK9gxoEpiw/viewform' target='_blank' className='py-4 px-8 text-center bg-red-600 text-white rounded-lg mt-10 md:mt-5'> Register for The Talk! </a>
      </div>
      </div>
  );
}

export default Hero;
