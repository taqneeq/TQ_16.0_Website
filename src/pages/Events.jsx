// Events.js
import React from "react";
import Nav from "../components/nav";

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

export default function Events() {
	return (
		<>
			<Nav />
			<div className="py-24 text-gray-300">
				<div className="mx-auto">
					<h1 className="text-4xl font-black text-red-500 text-center mb-8">
						Events
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl place-items-center mx-auto h-fit p-10">
						{eventsData.map((event, index) => (
							<a class="group relative block bg-black overflow-clip rounded  min-h-full md:max-h-[90vh] ">
								<img
									src={event.thumbnail}
									alt={event.name}
									class="absolute inset-0 min-h-full md:max-h-[30vh] min-w-full md:max-w-[30vw] object-cover opacity-30 transition-opacity group-hover:opacity-30 rounded"
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
