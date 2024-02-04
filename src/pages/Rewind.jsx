import React from "react";
import Nav from "../components/nav";
import "../styles/rewind.css";
const Rewind = () => {
	return (
		<div>
			<Nav />
			<div className="pt-24 p-1">
				<div class="image-grid">
					<div class="image-row">
						<div class="image image-01"></div>
						<div class="image image-02"></div>
						<div class="image image-03"></div>
					</div>
					<div class="image-row">
						<div class="image image-04"></div>
						<div class="image image-05"></div>
					</div>
					<div class="image-row">
						<div class="image image-06"></div>
						<div class="image image-07"></div>
						<div class="image image-08"></div>
						<div class="image image-09"></div>
					</div>
					<div class="image-row">
						<div class="image image-10"></div>
						<div class="image image-11"></div>
						<div class="image image-12"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Rewind;
