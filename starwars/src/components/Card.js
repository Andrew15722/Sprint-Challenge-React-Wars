import React from 'react';
import { Card, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function StarWarsCard({ name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender }) {
	return (
		<Card>
			<ul>
				<li className="card-li">{name}</li>
				<li className="card-li">{height}</li>
				<li className="card-li">{mass}</li>
				<li className="card-li">{hairColor}</li>
				<li className="card-li">{skinColor}</li>
				<li className="card-li">{eyeColor}</li>
				<li className="card-li">{birthYear}</li>
				<li className="card-li">{gender}</li>
			</ul>
		</Card>
	);
}

export default StarWarsCard;
