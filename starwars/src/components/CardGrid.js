import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarWarsCard from './Card';

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
			{data.map((char) => (
				<StarWarsCard
					key={char.name}
					name={char.name}
					height={char.height}
					mass={char.mass}
					hairColor={char.hair_color}
					skinColor={char.skin_color}
					eyeColor={char.eye_color}
					birthYear={char.birth_year}
					gender={char.gender}
				/>
			))}
		</div>
	);
}

export default CardGrid;
