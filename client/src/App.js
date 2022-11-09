import styled from 'styled-components';

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
	font-size: 18px;
`;

const CitySearch = styled.div`
	display: flex;
	flex-direction: column;
`;

const WeatherDisplay = styled.div`
	display: flex;
	flex-direction: column;
`;

const App = () => {
	return (
		<Container>
			<AppTitle>Weather App</AppTitle>
			<CitySearch>City Search</CitySearch>
			<WeatherDisplay>Weather Info</WeatherDisplay>
		</Container>
	);
};

export default App;
