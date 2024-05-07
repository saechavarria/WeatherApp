/* eslint-disable react/prop-types */
import './CityInfo.css'

const CityInfo = (props) => {
    const { cityLocation, date, icon, temp, minTemp, maxTemp } = props

    return (
        <>
            <div className='cityInfo'>
                <h1>{cityLocation}</h1>
                <p>{date}</p>
            </div>
            <div className='weatherIconContainer'>
                <img src={icon} alt='Weather Icon' />
                <h2 className='degree'>{Math.floor(temp)}°</h2>
            </div>

            <div>
                <h4>Min: {Math.floor(minTemp)}° </h4>
                <h4>Max: {Math.floor(maxTemp)}°</h4>
            </div>
        </>
    )
}

export default CityInfo
