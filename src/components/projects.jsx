import React from "react";
import "../styles/projects.css";

const Projects = () => {
	return (
		<div className="project-main">
			<div className="side-text">
				<p
					className="catch_projects"
					data-aos="fade"
					data-aos-duration="3000"
				>
					TQ16.0
				</p>
			</div>

			<div className="projects" data-aos="fade" data-aos-duration="3000">
				<h1 className="Projects-heading">
					Our Events{" "}
				</h1>
				<p className="projects-text">
				Our events are meticulously crafted with a strong emphasis on technological intricacies. We pride ourselves on curating experiences that delve into the finer details of cutting-edge technology, ensuring a profound and immersive journey for our participants. 
				</p>

				<div className="project-button">
					<a href="/events">
						<button class="omega-button">Learn More</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
