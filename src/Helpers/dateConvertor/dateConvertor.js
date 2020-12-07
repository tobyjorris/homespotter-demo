// used to convert the date from the format it's returned by WeatherAPI
const convertDate = (date) => {
    const options = { weekday: 'short',  day: '2-digit' }
    const formattedDate = new Date(`${date.split("-")}`)
    return formattedDate.toLocaleDateString("en-us", options)
}

export default convertDate;
