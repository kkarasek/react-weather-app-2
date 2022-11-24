import React from 'react';

import styled from 'styled-components';
import logo from '../assets/icons/perfect-day.svg';

const WeatherIcon = styled.img`
	width: 140px;
	height: 140px;
	margin: 25px auto;
`;

const SearchLocationLabel = styled.span`
	font-size: 18px;
	font-weight: bold;
`;

const SearchBox = styled.form`
	display: flex;
	border: solid 1px;
	border-radius: 2px;
	margin: 20px auto;

	& input {
		padding: 10px;
		border: none;
		padding: none;
		font-size: 14px;
		font-weight: bold;
	}

	& button {
		padding: 10px;
		border: none;
		padding: none;
		font-size: 14px;
		font-weight: bold;
		color: #f9f9f9;
		background-color: #181818;
		cursor: pointer;
	}
`;

const SearchComponent = ({ setLocation, getData }) => {
	return (
		<>
			<WeatherIcon src={logo} alt="weather-icon" />
			<SearchLocationLabel>Search Location</SearchLocationLabel>
			<SearchBox onSubmit={getData}>
				<input
					placeholder="City"
					onChange={(evt) => setLocation(evt.target.value)}
				/>
				<button type="submit">Search</button>
			</SearchBox>
		</>
	);
};

export default SearchComponent;
