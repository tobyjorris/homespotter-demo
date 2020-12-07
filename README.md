# Demo Weather App For HomeSpotter

This project was built as a demonstration application for HomeSpotter in Minneapolis, MN.

Technology used includes:
- React v17.0.1 
- React Bootstrap
- [Weather API](https://www.weatherapi.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart)

It allows a user to enter a zipcode, and returns the current weather for that location in addition to a three-day forecast of low, high, and average temperatures.

## Standout Features
To add flexibility to the data returned by WeatherAPI, there is a toggle to switch between Fahrenheit and Celsius. The toggle value is stored in the state of `weatherForm.js` component, and will therefore trigger a re-render of the `weatherDisplay.js` component since state is passed to it as props. This allows the user to toggle between Fahrenheit and Celsius without having to reach back out to the WeatherAPI.

`weatherForm.js` also utilizes local storage to persist the user's last search. The entire state object is sent to local storage upon successful return of the API data. Consequently, `componentDidMount()` is utilized to check for any store state in local storage and update the UI if it finds anything. 

#### Helper Methods
The first helper method is `dateConvertor.js`. This allows for transformation of the forecast dates returned by WeatherAPI from a format of year/month/day (xxxx/xx/xx) to a more user friendly day/date (ex: 8 Tue)

The second helper method is `getWeatherInfo.js`, and is responsible for fetching data from WeatherAPI, and was abstracted to a helper method to keep the `weatherForm.js` file lean.

### Important Note
Free accounts through WeatherAPI limit forecasts to 3 days, including 'today'. Ideally, for the forecast section to get a true 3 day forecase NOT including the day the user submits a request, you would change the `baseURL` query string to end with `&days=4`, then add `.slice(1)` in `weatherDisplay.js` where the forecast array is mapped over. This would allow the forecast to not include the day that is also displayed above in the 'Current' weather section.

## Available Scripts

In the project directory, you can run:

### `npm install`

Required to install all the packages required to run the application in development mode.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment

This application is deployed to Google's Firebase. To deploy any changes after running `npm run build`, run `firebase deploy`.

## Environment Variables

This project uses environment variables to protect WeatherAPI keys. To add your own environment variable, follow these steps:
- create an `.env` file in the root directory of this project
- create this entry:

``` javascript
REACT_APP_WEATHERAPI_KEY=<yourkey>
```
## Testing

Run `npm test` to run tests. Three files have very basic tests (`App.js`, `dateConvertor.js`, and `weatherForm.js`)


