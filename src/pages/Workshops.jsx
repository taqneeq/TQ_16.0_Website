// Workshops.js
import React from "react";
import Nav from "../components/nav";
const workshopsData = [
  {
    name: "Web Development Workshop",
    description:
      "Learn the fundamentals of web development with hands-on coding exercises. No prior experience required!",
    thumbnail:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
    date: "2024-08-10",
    time: "3:00 PM",
  },
  {
    name: "Digital Marketing Bootcamp",
    description:
      "Join our intensive digital marketing bootcamp and acquire practical skills for online success.",
    thumbnail:
      "https://cdn.acodez.in/wp-content/uploads/2022/12/Banner-image.png",
    date: "2024-09-15",
    time: "1:30 PM",
  },
  {
    name: "Digital Marketing Bootcamp",
    description:
      "Join our intensive digital marketing bootcamp and acquire practical skills for online success.",
    thumbnail:
      "https://cdn.acodez.in/wp-content/uploads/2022/12/Banner-image.png",
    date: "2024-09-15",
    time: "1:30 PM",
  },

  {
    name: "Digital Marketing Bootcamp",
    description:
      "Join our intensive digital marketing bootcamp and acquire practical skills for online success.",
    thumbnail:
      "https://cdn.acodez.in/wp-content/uploads/2022/12/Banner-image.png",
    date: "2024-09-15",
    time: "1:30 PM",
  },
  // Add more workshops as needed
];

function formatWorkshopDate(workshop) {
  const workshopDate = new Date(workshop.date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = workshopDate.toLocaleDateString("en-US", options);

  return formattedDate;
}

function Workshops() {
  return (
    <>
          <Nav />

    <div className="py-12 text-gray-300 bg-black w-screen">

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-8">
          Upcoming Workshops
        </h1>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopsData.map((workshop, index) => (
            <div
              key={index}
              className="event-card p-6 border-2 border-gray-300 hover:scale-110 rounded-lg shadow-md"
            >
              <img
                src={workshop.thumbnail}
                alt={`${workshop.name} Thumbnail`}
                className="mx-auto mb-4 rounded-md"
              />
              <h2 className="text-2xl text-red-500 font-semibold mb-2">
                {workshop.name}
              </h2>
              <p className="font-light text-md mb-2">{workshop.description}</p>
              <p className="font-medium mb-2">{formatWorkshopDate(workshop)}</p>
              <p className="font-light text-md mb-4">{workshop.time}</p>
              <div className="mt-4">
                <button className="bg-blue-500 px-8 py-2 rounded text-white">
                  REGISTER
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Workshops;
