// Events.js
import React from "react";
import Nav from "../components/nav";

const eventsData = [
	{
		name: "Design Conference",
		description:
			"Join us for a creative journey through the world of design. Learn from leading designers and artists.",
		thumbnail:
			"https://images.squarespace-cdn.com/content/v1/5230e9f8e4b06ab69d1d8068/1796c052-2f39-459d-9803-948677a9ecb2/Space+Tech+Expo.jpg",
		date: "2024-07-20",
		time: "2:30 PM",
	},
	{
		name: "Tech Expo 2024",
		description:
			"Explore the latest in technology with industry experts. Don't miss out on exciting demos and discussions!",
		thumbnail:
			"https://images.squarespace-cdn.com/content/v1/5230e9f8e4b06ab69d1d8068/1796c052-2f39-459d-9803-948677a9ecb2/Space+Tech+Expo.jpg",
		date: "2024-06-15",
		time: "10:00 AM",
	},
	{
		name: "Design Conference",
		description:
			"Join us for a creative journey through the world of design. Learn from leading designers and artists.",
		thumbnail:
			"https://images.squarespace-cdn.com/content/v1/5230e9f8e4b06ab69d1d8068/1796c052-2f39-459d-9803-948677a9ecb2/Space+Tech+Expo.jpg",
		date: "2024-07-20",
		time: "2:30 PM",
	},
	// Add more events as needed
];

function EventCard({ event }) {
	return (
		<div className=" bg-slate-100 rounded-2xl shadow-gray-700/25  ">
			<img
				src={event.thumbnail}
				alt={event.name}
				className="w-fit mb-4 rounded-t-2xl bg-cover"
			/>
			<div className="px-6 py-4 space-y-4">
				<h2 className="text-2xl  lg:text-3xl pb-2 font-bold text-gray-900">
					{event.name}
				</h2>
				<p className="text-gray-700  tracking-tight">
					{event.description}
				</p>
				<p className="text-gray-700  mt-2"> 🗓️ {event.date}</p>
				<p className="text-gray-700 mt-2">⏱️ {event.time} </p>
				<a class="pt group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring rounded-lg">
					<span class="absolute inset-0 border border-blue-600 group-active:border-blue-500 rounded-lg"></span>
					<span class="block border border-blue-600 bg-blue-600 px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-lg">
						Register Now!
					</span>
				</a>{" "}
			</div>
		</div>
	);
}

function Events() {
	return (
		<>
			<Nav />
			<div className="py-24 text-gray-300">
				<div className="mx-auto">
					<h1 className="text-4xl font-black text-red-500 text-center mb-8">
						Upcoming Events
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
									class="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-30 rounded"
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
												🗓️ {event.date}
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

export default Events;
