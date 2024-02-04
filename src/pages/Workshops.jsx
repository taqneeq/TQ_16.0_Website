// Events.js
import React from "react";
import Nav from "../components/nav";

const eventsData = [
	{
		name: "AI BOT MAKING WORKSHOP",
		description:
			"Explore OpenAI and ChatGPT to dive into advanced artificial intelligence. Build your own AI tool using provided resources, harnessing the power of GPT for customization. Deploy your creation on the internet for global accessibility.",
		thumbnail:
			"https://shooliniuniversity.com/blog/wp-content/uploads/2023/03/BTech-Mechanical-Engineering-Robotics-AI.png",
		date: "2024-02-07",
		time: "2 PM to 4 PM ",
	},
	{
		name: "CRYPTOCURRENCY",
		description:
			"Create a smart contract effortlessly using Solidity, even with no prior experience. Customize your cryptocurrency to suit your preferences, and easily deploy it to bring your personalized blockchain project to life",
		thumbnail:
			"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "2024-02-08",
		time: "2 PM to 4 PM ",
	},

	{
		name: "ROBOTICS",
		description:
			"Explore robotics in our beginner-friendly workshop. Learn to build and program robots without prior experience. Robotics Kit would be provided aswell",
		thumbnail:
			"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "2024-02-09",
		time: "1 PM to 4 PM",
	},
	// Add more workshops as needed
];
function formatDateString(dateString) {
	const dateObject = new Date(dateString);
	const options = {
		day: "numeric",
		month: "short",
		year: "numeric",
		weekday: "long",
	};

	return dateObject.toLocaleDateString("en-US", options);
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
							<a class="group relative block bg-black overflow-clip rounded h-full ">
								<img
									src={event.thumbnail}
									alt={event.name}
									class="absolute inset-0 h-full  max-h-[80vh] w-full object-cover opacity-40 transition-opacity group-hover:opacity-30 rounded"
								/>

								<div class="relative p-4 sm:p-6 lg:p-8 ">
									<p class="text-sm font-medium uppercase tracking-widest text-pink-500">
										{event.name}
									</p>

									<p class="text-lg font-bold text-white ">
										{event.description}
									</p>
									<p className=" mt-2">⏱️ {event.time} </p>
									<p className=" mt-2">
										⏱️ {formatDateString(event.date)}
									</p>

									<div class="mt-32 lg:mt-44">
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

export default Workshops;
