import React from 'react';
import styled from 'styled-components';

import logo from '../assets/perfect-day.svg';

const WeatherLogo = styled.img`
	width: 140px;
	height: 140px;
`;

const SearchLocationLabel = styled.span`
	font-size: 18px;
	font-weight: bold;
`;

const SearchBox = styled.form`
	display: flex;
	flex-direction: row;
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

const CitySearch = () => {
	return (
		<>
			<WeatherLogo src={logo} alt="weather-logo" />
			<SearchLocationLabel>Search Location</SearchLocationLabel>
			<SearchBox>
				<input placeholder="City" />
				<button>Search</button>
			</SearchBox>
		</>
	);
};

export default CitySearch;
