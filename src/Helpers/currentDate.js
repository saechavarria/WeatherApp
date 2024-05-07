function formatDate(dateString) {
    const date = new Date(dateString)

    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const dayOfWeek = daysOfWeek[date.getDay()]
    const month = months[date.getMonth()]
    const dayOfMonth = date.getDate()
    const year = date.getFullYear()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12
    minutes = minutes < 10 ? '0' + minutes : minutes

    const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year} at ${hours}:${minutes} ${ampm}`

    return formattedDate
}

export default formatDate
