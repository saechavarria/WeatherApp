/* eslint-disable react/prop-types */
import './CurrentWeatherInfo.css'
import CityInfo from './CityInfo/CityInfo'
import WeatherCardsContainer from './WeatherCardContainer/WeatherCardsContainer'
import formatDate from '../../Helpers/currentDate'

const CurrentWeatherInfo = ({ currentCityWeatherInfo }) => {
    return (
        <div className='weatherContainer'>
            <CityInfo
                cityLocation={`${currentCityWeatherInfo.location.name} ${currentCityWeatherInfo.location.region}, ${currentCityWeatherInfo.location.country}`}
                date={formatDate(currentCityWeatherInfo.location.localtime)}
                mainInfo={currentCityWeatherInfo.current.condition.text}
                temp={currentCityWeatherInfo.current.temp_c}
                minTemp={currentCityWeatherInfo.current.temp_c - 2}
                maxTemp={currentCityWeatherInfo.current.temp_c + 2}
                icon={currentCityWeatherInfo.current.condition.icon}
            />
            <WeatherCardsContainer
                feelsLike={currentCityWeatherInfo.current.feelslike_c}
                humidity={currentCityWeatherInfo.current.humidity}
                wind={currentCityWeatherInfo.current.wind_kph}
                pressure={currentCityWeatherInfo.current.pressure_mb}
            />
        </div>
    )
}

export default CurrentWeatherInfo
