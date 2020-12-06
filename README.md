# Demo Weather App For HomeSpotter

This project was built as a demonstration application for HomeSpotter in Minneapolis, MN.

Technology used includes:
- React v17.0.1 
- React Bootstrap
- [Weather API](https://www.weatherapi.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart)

It allows a user to enter a zipcode, and returns the current weather for that location in addition to a three-day forecast of low, high, and average temperatures.

## Standout Features
To add flexibility to the data returned by WeatherAPI, there is a toggle to switch between Fahrenheit and Celsius. This toggle is store in the state of `weatherForm.js` component, and will therefore trigger a re-render of the `weatherDisplay.js` component since state is passed to it as props. This allows the user to toggle between Fahrenheit and Celsius without having to reach back out to the WeatherAPI.

There is one helper method, contained in `dateConvertor.js`. This allows for transformation of the forecast dates returned by WeatherAPI from a format of year/month/day (xxxx/xx/xx) to a more user friendly day/date (ex: Tue 08)

`weatherForm.js` also utilizes local storage to persist the user's last search. The entire state object is sent to local storage upon successful return of the API data. Consequently, `componentDidMount()` is utilized to check for any store state in local storage and update the UI if it finds anything. 

## Available Scripts

In the project directory, you can run:

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

This application is deployed to Google's Firebase. To deploy any changes after running `npm run build`, simply run `firebase deploy`.

## Environment Variables

This project uses environment variables to protect WeatherAPI keys. To add your own environment variable, follow these steps:
- create an `.env` file in the root directory of this project
- create this entry:

``` javascript
REACT_APP_WEATHERAPI_KEY=<yourkey>
```



