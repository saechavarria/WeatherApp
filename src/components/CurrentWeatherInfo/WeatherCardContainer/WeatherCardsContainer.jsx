import WeatherCard from './WeatherCard/WeatherCard.jsx'
import './WeatherCardsContainer.css'

const WeatherCardsContainer = ({ feelsLike, humidity, wind, pressure }) => {
    return (
        <article className='weatherCardsContainer'>
            <WeatherCard
                icon='thermostat'
                title='Feels Like'
                info={Math.floor(feelsLike) + `°`}
            />
            <WeatherCard
                icon='water_drop'
                title='Humidity'
                info={Math.floor(humidity) + `%`}
            />
            <WeatherCard icon='airwave' title='Wind' info={wind + ` m/s`} />
            <WeatherCard
                icon='blood_pressure'
                title='Pressure'
                info={Math.floor(pressure) + ` hPa`}
            />
        </article>
    )
}

export default WeatherCardsContainer
