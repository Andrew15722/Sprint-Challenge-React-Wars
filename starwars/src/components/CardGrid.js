import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarWarsCard from './Card';
import { Card } from 'semantic-ui-react';

function CardGrid() {
	//keep naming conventions simple.
	const [ data, setData ] = useState([]);
	useEffect(() => {
		axios.get('https://henry-mock-swapi.herokuapp.com/api').then((res) => {
			setData(res.data.results);
		});
	}, []);

	return (
		// don't forget to pay attention to divs and the overall formatting of your return.
		// always add curly braces before you write javascript in JSX
		<div>
			<Card.Group itemsPerRow={3}>
				{data.map((char) => (
					<StarWarsCard
						key={char.name}
						name={`Name: ${char.name}`}
						height={`height: ${char.height}`}
						mass={`mass: ${char.mass}`}
						hairColor={`Hair Color:${char.hair_color}`}
						skinColor={`Skin Color: ${char.skin_color}`}
						eyeColor={`Eye Color: ${char.eye_color}`}
						birthYear={`BirthYear: ${char.birth_year}`}
						gender={`gender ${char.gender}`}
					/>
				))}
			</Card.Group>
		</div>
	);
}

export default CardGrid;
