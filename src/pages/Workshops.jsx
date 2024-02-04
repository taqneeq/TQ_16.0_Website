// Events.js
import React from "react";
import Nav from "../components/nav";

const eventsData = [
	{
		name: "AI BOT MAKING WORKSHOP",
		description:"Discover OpenAI and ChatGPT to delve into the world of advanced artificial intelligence. Learn to build your own AI tool with the provided resources. Utilize OpenAI and GPT to create a customized AI tool tailored to your needs. Finally, deploy it on the internet, making your creation accessible to a global audience.",
		thumbnail:
			"https://cdn.acodez.in/wp-content/uploads/2022/12/Banner-image.png",
		date: "2024-02-07",
		time: "2 PM to 4 PM ",
	},
	{
		name: "CRYPTOCURRENCY",
		description:"Create a smart contract effortlessly using Solidity, even with no prior experience. Customize your cryptocurrency to suit your preferences, and easily deploy it to bring your personalized blockchain project to life",
		thumbnail:
			"https://cdn.acodez.in/wp-content/uploads/2022/12/Banner-image.png",
		date: "2024-02-08",
		time: "2 PM to 4 PM ",
	},

	{
		name: "ROBOTICS",
		description:"Explore robotics in our beginner-friendly workshop. Learn to build and program robots without prior experience. Robotics Kit would be provided aswell",
		thumbnail:
			"https://cdn.acodez.in/wp-content/uploads/2022/12/Banner-image.png",
		date: "2024-02-09",
		time: "1 PM to 4 PM",
	},
	// Add more workshops as needed
];
function formatDateString(dateString) {
	const dateObject = new Date(dateString);
	const options = {
	  day: 'numeric',
	  month: 'short',
	  year: 'numeric',
	  weekday: 'long',
	};
  
	return dateObject.toLocaleDateString('en-US', options);
  }


function Workshops() {
	return (
		<>
			<Nav />
			<div className="py-24 text-gray-300">
				<div className="mx-auto">
					<h1 className="text-4xl font-black text-red-500 text-center mb-8">
						Workshops
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl place-items-center mx-auto h-fit p-10">
						{eventsData.map((event, index) => (
							<EventCard key={index} event={event} />
						))}
						{eventsData.map((event, index) => (
							<a class="group relative block bg-black rounded">
								<img
									src={event.thumbnail}
									alt={event.name}
									class="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-30 rounded"
								/>

								<div class="relative p-4 sm:p-6 lg:p-8 ">
									<p class="text-sm font-medium uppercase tracking-widest text-pink-500">
										{event.name}
									</p>

									<p class="text-xl font-bold text-white sm:text-2xl md:-mb-16">
										{event.description}
									</p>

									<div class="mt-32 sm:mt-48 lg:mt-64">
										<div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 space-y-3 ">
											<p className="  mt-2">
												{" "}
												🗓️ {formatDateString(event.date)}
											</p>
											<p className=" mt-2">
												⏱️ {event.time}{" "}
											</p>
											<a class="pt group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring rounded-lg">
												<span class="absolute inset-0 border-2 border-blue-600 group-active:border-blue-500 rounded-lg"></span>
												<span class="block border border-blue-600 bg-blue-600 px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-lg">
													Register Now!
												</span>
											</a>{" "}
										</div>
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Workshops;
