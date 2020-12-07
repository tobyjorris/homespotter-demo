const getWeatherInfo = async location => {
    // url base for construction after retrieving the zip code from the user -- **LIMITED TO 3 DAYS WITH FREE API ACCOUNT**
    const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${location}&days=3`
    const request = await fetch(baseURL)
    try {
        console.log(request)
        return request.json();
    } catch (error) {
        console.log(error)
    }
}

export default getWeatherInfo;
