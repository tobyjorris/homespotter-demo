const convertDate = (date) => {
    const options = { day: 'numeric', weekday: 'short'}
    const formattedDate = new Date(`${date.split("-")}`)
    return formattedDate.toLocaleDateString("en-us", options)
}

export default convertDate;
