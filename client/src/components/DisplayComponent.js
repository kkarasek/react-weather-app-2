import React from 'react';
import styled from 'styled-components';

import logo from '../assets/icons/perfect-day.svg';
import { WeatherInfoIcons } from '../model/WeatherIcons';

const WeatherConditionContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 30px auto;
`;

const WeatherDescription = styled.span`
	margin: 20px auto;

	& span {
		font-size: 36px;
	}
`;

const WeatherIcon = styled.img`
	width: 100px;
	height: 100px;
	margin: 5px auto;
`;

const Location = styled.span`
	font-size: 28px;
	font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
	font-size: 14px;
	font-weight: bold;
	margin: 20px 25px 10px;
	text-align: start;
	width: 90%;
`;

const WeatherInfoContainer = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
`;

const InfoContainer = styled.div`
	display: flex;
	margin: 5px 10px;
	justify-content: space-evenly;
	align-items: center;
`;

const InfoIcon = styled.img`
	width: 36px;
	height: 36px;
`;

const InfoLabel = styled.span`
	display: flex;
	flex-direction: column;
	font-size: 14px;
	margin: 15px;
	& span {
		font-size: 12px;
		text-transform: capitalize;
	}
`;

const WeatherInfoComponent = ({ name, value }) => {
	return (
		<>
			<InfoContainer>
				<InfoIcon src={WeatherInfoIcons[name]} />
				<InfoLabel>
					{value} <span>{name}</span>
				</InfoLabel>
			</InfoContainer>
		</>
	);
};

const WeatherDisplay = () => {
	return (
		<>
			<WeatherConditionContainer>
				<WeatherDescription>
					<span>30 °C</span> | Cloudy
				</WeatherDescription>
				<WeatherIcon src={logo} alt="weather-icon" />
			</WeatherConditionContainer>
			<Location>Berlin, DE</Location>
			<WeatherInfoContainer>
				<WeatherInfoLabel>Weather Info</WeatherInfoLabel>
				<WeatherInfoComponent name="sunrise" value="19:37" />
				<WeatherInfoComponent name="humidity" value="" />
				<WeatherInfoComponent name="wind" value="" />
				<WeatherInfoComponent name="pressure" value="" />
			</WeatherInfoContainer>
		</>
	);
};

export default WeatherDisplay;
