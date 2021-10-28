import React from 'react';
import { Link } from 'react-router-dom';

const HomeContainer = () => {
	return (
		<div>
			<h1>Home</h1>
			<div>
				<ul>
					<li>
						<Link to="/counter">Counter</Link>
					</li>
					<li>
						<Link to="/event">Event List</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomeContainer;
