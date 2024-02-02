import React from 'react';
import "../index.css"
import Nav from '../components/nav';

const sponsorsData = [
  {
    name: 'BMW',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png',
  },
  {
    name: 'Mercedes',
    logo: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/163433/gle-facelift-right-front-three-quarter-2.jpeg?isig=0&q=80g',
  },
  {
    name: 'BMW',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png',
  },
  {
    name: 'Mercedes',
    logo: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/163433/gle-facelift-right-front-three-quarter-2.jpeg?isig=0&q=80g',
  },
  {
    name: 'BMW',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png',
  },
  {
    name: 'Mercedes',
    logo: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/163433/gle-facelift-right-front-three-quarter-2.jpeg?isig=0&q=80g',
  },
];

function Sponsors() {
  return (
    <>
    <Nav/>
    <div className=" text-dimWhite w-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-red-500 text-center mb-8">Our Sponsors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorsData.map((sponsor, index) => (
            <div key={index} className=" border-2 border-gray-400 rounded-md p-6  shadow-md">
              <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="mx-auto mb-4 w-64" />
              <h2 className="text-xl font-semibold">{sponsor.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Sponsors;
