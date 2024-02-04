import React from 'react'
import { useEffect } from 'react';

import '../styles/cards.css'
const Cards = () => {
  let progress = 50;
  let startX = 0;
  let active = 0;
  let isDown = false;

  const speedWheel = 0.02;
  const speedDrag = -0.1;

  const getZindex = (array, index) =>
    array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

  useEffect(() => {
    const $items = document.querySelectorAll('.carousel-item');
    const $cursors = document.querySelectorAll('.cursor');

    const displayItems = (item, index, active) => {
      const zIndex = getZindex([...$items], active)[index];
      item.style.setProperty('--zIndex', zIndex);
      item.style.setProperty('--active', (index - active) / $items.length);
    };

    const animate = () => {
      progress = Math.max(0, Math.min(progress, 100));
      active = Math.floor((progress / 100) * ($items.length - 1));

      $items.forEach((item, index) => displayItems(item, index, active));
    };
    animate();

    $items.forEach((item, i) => {
      item.addEventListener('click', () => {
        progress = (i / $items.length) * 100 + 10;
        animate();
      });
    });

    const handleWheel = (e) => {
      const wheelProgress = e.deltaY * speedWheel;
      progress = progress + wheelProgress;
      animate();
    };

    const handleMouseMove = (e) => {
      if (e.type === 'mousemove') {
        $cursors.forEach(($cursor) => {
          $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
      if (!isDown) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const mouseProgress = (x - startX) * speedDrag;
      progress = progress + mouseProgress;
      startX = x;
      animate();
    };

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    /*--------------------
    Listeners
    --------------------*/
    document.addEventListener('mousewheel', handleWheel);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleMouseDown);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);
  }, []);

  const eventsData = [
    {
      name: "Tech Expo",
      description:
        "Show case of all mechanical and electrical working models made by college students competing against each other to be proved as the best model of tech expo.",
      thumbnail:
        "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9ib3RpYyUyMGFybXxlbnwwfHwwfHx8MA%3D%3D",
      date: "2024-09-15",
      time: "1:30 PM",
    },
    {
      name: "Mirror code conquer (ESCAPE ROOM):",
      description:
        "Escape room filled with all technical levels and the contestant has to pass all the levels to be crowned the winner.",
      thumbnail:
        "https://www.science.edu.sg/images/default-source/scs-images/whats-on/exhibitions/mirror-maze/carousel/mirrormaze-carousel-01.jpg",
      date: "2024-09-15",
      time: "1:30 PM",
    },
  
    {
      name: "RC Rocket League",
      description:
        " Rocket league but in real life. Use remote controlled RC cars to beat you opponent by scoring more goals I the given time limit.",
      thumbnail:
        "https://assetsio.reedpopcdn.com/Rocket-League-(header-suggestion).jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      date: "2024-09-15",
      time: "1:30 PM",
    },
    {
      name: "Cycle Simulator ",
      description:
        " Cycle as fast as you can can to beat the previous players RPM. Can you become the cycle champion.",
      thumbnail:
        "https://static.wixstatic.com/media/ed3ec7_d6d218598f324359ae6750997f52e860~mv2.jpeg/v1/fill/w_1080,h_516,al_c,q_85,enc_auto/ed3ec7_d6d218598f324359ae6750997f52e860~mv2.jpeg",
      date: "2024-09-15",
      time: "1:30 PM",
    },
    {
      name: "Decodathon",
      description: " Debugging the code given in a particular time limit.",
      thumbnail:
        "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-09-15",
      time: "1:30 PM",
    },
    {
      name: "Balloon burst derby",
      description:
        " Includes remote controlled cars which compete with each other one of them has pins and the other has a balloon and the car with pins tries to burst the balloons on the other car to win ",
      thumbnail:"/balloon.jpeg",
      date: "2024-09-15",
      time: "1:30 PM",
    },
    {
      name: "Rod Dropper",
      description:
        "7 rods are dropped in a random sequence and at a random time interval you have to catch all the 7 rods to wi the game while keeping all the rods in our hand until the last one is caught.",
      thumbnail:
        "/rod dropper.jpeg",
      date: "2024-09-15",
      time: "1:30 PM",
    },
    {
      name: "F1 Timer",
      description:
        " Lights out and here we go ! Start your car engine as fast as you can with a click of the button thats given. You keep climbing the leaderboard charts depending on how fast your reaction time is. ",
      thumbnail:"/f1.jpeg",
      date: "2024-09-15",
      time: "1:30 PM",
    },
    {
      name: "Labyrinth Quest",
      description:
        "Balance the ball and guide it through the different routes on our wooden maze to solve the puzzle and win the game. ",
      thumbnail:
        "https://images.unsplash.com/photo-1590278458425-6aa3912a48a5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-09-15",
      time: "1:30 PM",
    },
    // Add more workshops as needed
  ];

  return (
    <div className='main-carousel' >   
     <div class="carousel">


	<div class="carousel-item">
		<div class="carousel-box">
			<div class="title">Cyber Cypher</div>
			<img src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
		</div>
	</div>
      {eventsData.map((event, index) => (	
      <a href='/events'>
      <div class="carousel-item">
		<div class="carousel-box">
			<div class="title">{event.name}</div>
	<img src={event.thumbnail} />
		</div>
	</div>
  </a>))}
</div>
<div class="cursor"></div>
<div class="cursor cursor2"></div>
</div>
  )
}

export default Cards;