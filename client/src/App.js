import styled from 'styled-components';
import axios from 'axios';

import SearchComponent from './components/SearchComponent';
import WeatherDisplay from './components/DisplayComponent';
import { useState } from 'react';

const { REACT_APP_API_KEY } = process.env;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	align-items: center;
	box-shadow: 0 3px 6px 0 #555;
	padding: 20px 10px;
	border-radius: 4px;
	width: 380px;
	background: #f9f9f9;
`;

const AppTitle = styled.span`
	font-weight: bold;
	font-size: 24px;
`;

const App = () => {
	const [location, setLocation] = useState('');
	const [data, setData] = useState('');

	const getData = async (evt) => {
		evt.preventDefault();
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${REACT_APP_API_KEY}&units=metric`;
		try {
			const response = await axios(url);
			console.log(response.data);
			setData(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<AppTitle>Weather App</AppTitle>
			{data ? (
				<WeatherDisplay data={data} />
			) : (
				<SearchComponent setLocation={setLocation} getData={getData} />
			)}
		</Container>
	);
};

export default App;
