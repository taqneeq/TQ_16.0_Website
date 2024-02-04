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
					My Work
				</p>
			</div>

			<div className="projects" data-aos="fade" data-aos-duration="3000">
				<h1 className="Projects-heading">
					Projects - Websites Design{" "}
				</h1>
				<p className="projects-text">
					I specialize in crafting bespoke web designs that are
					distinct and eye-catching. My expertise lies in developing
					interfaces that are immersive, intuitive, and innovative. I
					also create trendy and imaginative brand visuals and
					identities.
				</p>

				<div className="project-button">
					<a href="/work">
						<button class="omega-button">Learn More</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
