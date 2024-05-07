import './WeatherCard.css'

const WeatherCard = (props) => {
    const { icon, title, info } = props

    return (
        <article className='weatherCard'>
            <span className='material-symbols-outlined'>{icon}</span>
            <div>
                <p>{title}</p>
                <p>{info}</p>
            </div>
        </article>
    )
}

export default WeatherCard
