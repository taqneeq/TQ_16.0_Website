// Events.js
import React from 'react';
import Nav from '../components/nav';

const eventsData = [
  {
    name: 'Tech Expo 2024',
    description: 'Explore the latest in technology with industry experts. Don\'t miss out on exciting demos and discussions!',
    thumbnail: 'https://images.squarespace-cdn.com/content/v1/5230e9f8e4b06ab69d1d8068/1796c052-2f39-459d-9803-948677a9ecb2/Space+Tech+Expo.jpg',
    date: '2024-06-15',
    time: '10:00 AM',
  },
  {
    name: 'Design Conference',
    description: 'Join us for a creative journey through the world of design. Learn from leading designers and artists.',
    thumbnail: 'https://example.com/design-conference-thumbnail.jpg',
    date: '2024-07-20',
    time: '2:30 PM',
  },
  {
    name: 'Tech Expo 2024',
    description: 'Explore the latest in technology with industry experts. Don\'t miss out on exciting demos and discussions!',
    thumbnail: 'https://images.squarespace-cdn.com/content/v1/5230e9f8e4b06ab69d1d8068/1796c052-2f39-459d-9803-948677a9ecb2/Space+Tech+Expo.jpg',
    date: '2024-06-15',
    time: '10:00 AM',
  },
  {
    name: 'Design Conference',
    description: 'Join us for a creative journey through the world of design. Learn from leading designers and artists.',
    thumbnail: 'https://example.com/design-conference-thumbnail.jpg',
    date: '2024-07-20',
    time: '2:30 PM',
  },
  // Add more events as needed
];

function formatEventDate(event) {
  const eventDate = new Date(event.date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = eventDate.toLocaleDateString('en-US', options);

  return formattedDate;
}

function Events() {
  return (
    <>
    <Nav/>
    <div className="py-12  text-gray-300">
      <div className=" mx-auto">
        <h1 className="text-4xl font-bold text-red-500 text-center mb-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <div key={index} className="event-card p-6 border-2 border-gray-300 hover:scale-110 rounded-lg shadow-md">
              <img
                src={event.thumbnail}
                alt={`${event.name} Thumbnail`}
                className="mx-auto mb-4 rounded-md"
              />
              <h2 className="text-2xl text-blue-500 font-semibold mb-2">{event.name}</h2>
              <p className="font-light text-md mb-2">{event.description}</p>
              <p className="font-medium mb-2">{formatEventDate(event)}</p>
              <p className="font-light text-md mb-4">{event.time}</p>
              <div className="mt-4">
                <button className='bg-red-500 px-8 py-2 rounded text-white'>REGISTER</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>

  );
}

export default Events;
