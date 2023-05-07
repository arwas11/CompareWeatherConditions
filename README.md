# About Compare Weather Conditions React App

This app allows you to compare today's weather conditions in a specific city to the weather conditions in the same city in the past.

## Weather Conditions React App Live Link

[https://weather-conditions-app-11.netlify.app/](https://weather-conditions-comparison-11.netlify.app/)

## Motivation

I was motivated to create this app by the drastic and noticeable changes in weather temperatures around the world.

## Screenshots

![ScreenshotOfApp1](https://user-images.githubusercontent.com/121985979/236693361-19bf1b11-69d5-4597-b5de-2774092adab1.png)
![ScreenshotOfApp2](https://user-images.githubusercontent.com/121985979/233684042-b0a5ba14-30d2-49c3-9775-296c682659ff.png)
![ScreenshotOfApp3](https://user-images.githubusercontent.com/121985979/233697544-7e81c450-58e3-4891-a269-7e3896acb552.png)

## How To Use

The app is easy to use. The user will need to click the enter buton in the welcome page and will be directed to the page where they will be comaper the weather conditions. On that page, the user will type a city name and click submit to get the current weather condition. Then the user will need to type or enter a specific past date - due to the Open-Metep API limitation, the past date needs to be starting from 5 days back.  After entering the desired date, clicking submit will display the weather conditions data for the entered date.

## Technologies used

- I used React.js framework to build this app, created a current and a past weather pages and a nav component, and utilized React Hooks.
- I used OpenWeather API to fetch current weather conditions and Open-Meteo Historical Weather API to pull historic weather conditions.
- I worked on analyzing the JSON data fetched from the APIs to display the desired weather conditions parameters in the results.
- I used useState hook to manage the different states in the app.
- I used async await to fetch the weather data from the two APIs in my app.
- I used the Browser Router dependency to present the welcome and home pages in the app.
- I also installed a number of NPM Packages that my app depended on, such as react-router-dom, moment, and date-fns.


## Unresolved Issues

- Due to the Open-Metep API limitation that does not include the past 5 days weather conditions data, I am planning to configure the date input to only show a calendar-date selections starting from 5 days farther. 
- Work on error handling

## Future Improvements

- Displaying animated images that reflect the weather condition
- Style refinement

### Credits

Instructors and classmates, OpenWeather, Open-Meteo, moment, date-fns, StackOverflow users for solutions and suggestions for different problems
