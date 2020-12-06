const convertDate = (date) => {
    const options = { weekday: 'short', day: 'numeric'}
    const formattedDate = new Date(`${date.split("-")}`)
    return formattedDate.toLocaleDateString("en-us", options)
}

export default convertDate;
