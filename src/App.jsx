import Header from './components/Header/Header.jsx'
import CurrentWeatherInfo from './components/CurrentWeatherInfo/CurrentWeatherInfo.jsx'
import { getCurrentWeatherInfoByCity } from './Services/currentWeatherInfoByCity.js'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
    const [cityName, setCityName] = useState('Medellin')
    const [currentCityWeatherInfo, setCurrentCityWeatherInfo] = useState()

    const searchCityByName = async (cityName) => {
        getCurrentWeatherInfoByCity(cityName)
            .then((cityWeatherInfo) => {
                setCurrentCityWeatherInfo(cityWeatherInfo)
            })
            .catch((error) => {
                console.error('Error al obtener información del clima:', error)
            })
    }

    useEffect(() => {
        searchCityByName(cityName)
    }, [cityName])

    return (
        <>
            <Header setCityName={setCityName} />
            {!currentCityWeatherInfo ? ( // Mostrar el div de carga si isLoading es true
                <div>Loading...</div>
            ) : (
                <CurrentWeatherInfo
                    currentCityWeatherInfo={currentCityWeatherInfo}
                />
            )}
        </>
    )
}

export default App
