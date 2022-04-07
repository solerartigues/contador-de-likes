import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [variable, setVariable] = useState(0);
	return (
		<div className="text-center">
			<h1>Red Social Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a
				href="#"
				className="btn btn-success col"
				onClick={() => {
					setVariable(variable + 1);
				}}>
				Like
			</a>
			<a
				href="#"
				className="btn btn-danger col"
				onClick={() => {
					if (variable > 0) {
						setVariable(variable - 1);
					}
				}}>
				Dislike
			</a>
			<h2>{variable} </h2>
		</div>
	);
};

export default Home;
