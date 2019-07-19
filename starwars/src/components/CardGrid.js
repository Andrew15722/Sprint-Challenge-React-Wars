import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarWarsCard from './Card';

function CardGrid() {
	const [ cardData, setCardData ] = useState([]);
	// const [ cardName, setCardName ] = useState();
	// const [ cardHeight, setCardHeight ] = useState();
	// const [ cardMass, setCardMass ] = useState();
	// const [ cardHairColor, setCardHairColor ] = useState();
	// const [ cardSkinColor, setCardSkinColor ] = useState();
	// const [ cardEyeColor, setCardEyeColor ] = useState();
	// const [ cardBirthYear, setCardBirthYear ] = useState();
	// const [ cardGender, setCardGender ] = useState();

	useEffect(() => {
		axios.get('https://henry-mock-swapi.herokuapp.com/api').then((res) => {
			const data = res.data.results;
			console.log('RETURN', data);
			setCardData(cardData.push(res.data.results));
			console.log('card', cardData);
			// setCardName(data.name);
			// setCardHeight(data.height);
			// setCardMass(data.mass);
			// setCardHairColor(data.hair_color);
			// setCardSkinColor(data.skin_color);
			// setCardEyeColor(data.eye_color);
			// setCardBirthYear(data.birth_year);
			// setCardGender(data.gender);
		});
	}, []);

	// return cardData.map((api) => {
	return (
		<div>
			<ul>
				<StarWarsCard
					key={cardData.name}
					name={cardData.name}
					height={cardData.height}
					mass={cardData.mass}
					hairColor={cardData.hair_color}
					skinColor={cardData.skin_color}
					eyeColor={cardData.eye_color}
					birthYear={cardData.birth_year}
					gender={cardData.gender}
				/>
			</ul>
		</div>
	);
	// });
}

export default CardGrid;
