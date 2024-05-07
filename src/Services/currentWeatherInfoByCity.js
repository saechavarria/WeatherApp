const apiKey = `key=${import.meta.env.WEATHER_APP_API_KEY}`

const BASE_URL = 'http://api.weatherapi.com/v1'
const CURRENT_WEATHER_INFO_BY_CITY = '/current.json'

export const getCurrentWeatherInfoByCity = (cityName) => {
    const encodedCityName = encodeURIComponent(cityName)
    const url = `${BASE_URL}${CURRENT_WEATHER_INFO_BY_CITY}?${apiKey}&q=${encodedCityName}&lang=en`

    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        'Error en la solicitud de la API de clima: '
                    )
                }
                return res.json()
            })
            .then((data) => {
                // Verificar la estructura completa de los datos
                if (data && data.current && data.location) {
                    resolve(data) // Resuelve con los datos completos
                } else {
                    throw new Error('Estructura de datos incorrecta:' + data)
                }
            })
            .catch((error) => {
                console.error('Error al obtener la información:', error)
                reject(error)
            })
    })
}
