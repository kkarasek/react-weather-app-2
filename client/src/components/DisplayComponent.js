import React from 'react';
import styled from 'styled-components';

import { WeatherIcons } from '../model/WeatherIcons';
import { WeatherInfoIcons } from '../model/WeatherInfoIcons';

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

const WeatherDisplay = ({ data }) => {
	const isDay = data.weather[0].icon?.includes('d');

	const getTime = (timeStamp) => {
		const hour = new Date(timeStamp * 1000).getHours();
		const minutes = new Date(timeStamp * 1000).getMinutes();
		return `${hour < 10 ? '0' + hour : hour}:${
			minutes < 10 ? '0' + minutes : minutes
		}`;
	};
	return (
		<>
			<WeatherConditionContainer>
				<WeatherDescription>
					<span>{data.main.temp}</span> | {data.weather[0].main}
				</WeatherDescription>
				<WeatherIcon
					src={WeatherIcons[data.weather[0].icon]}
					alt="weather-icon"
				/>
			</WeatherConditionContainer>
			<Location>{`${data.name}, ${data.sys.country}`}</Location>
			<WeatherInfoContainer>
				<WeatherInfoLabel>Weather Info</WeatherInfoLabel>
				<WeatherInfoComponent
					name={isDay ? 'sunset' : 'sunrise'}
					value={getTime(data.sys[isDay ? 'sunset' : 'sunrise'])}
				/>
				<WeatherInfoComponent
					name="humidity"
					value={`${data.main.humidity} %`}
				/>
				<WeatherInfoComponent name="wind" value={`${data.wind.speed} m/s`} />
				<WeatherInfoComponent
					name="pressure"
					value={`${data.main.pressure} hPa`}
				/>
			</WeatherInfoContainer>
		</>
	);
};

export default WeatherDisplay;
