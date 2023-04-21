# About Weather Conditions React App

This app allows you to compare today's weather conditions in a specific city to the weather conditions in the same city in the past.

## Weather Conditions React App Live Link

https://weather-conditions-app-11.netlify.app/

## Motivation

I was motivated to create this app by the drastic and noticeable changes in weather temperature around the world.

### Screenshots

"./public/ScreenshotOfApp1.png"
"./public/ScreenshotOfApp2.png"
"./public/ScreenshotOfApp3.png"

### Technologies used

- I used React.js framework to build this app, created pages and a nav component, and utilized React Hooks.
- I used OpenWeather API to fetch current weather conditions and Open-Meteo Historical Weather API to pull historic weather conditions.
- I worked on analyzing the JSON data fetched from the APIs to display the desired weather conditions parameters in the results.
- I used useState manage the different states in my app.
- I used async await fetch the weather data from the two APIs in my app.
- I used the Browser Router dependency to present the two pages the I have in my app.
- I also installed a number of NPM Packages that my app depended on, such as: react-router-dom, moment, and date-fns.
- I also

### How To Use

The app is easy to use. The user will need to enter into the page where a city and a specific past date need to be entered. Due to the Open-Metep API limitation, the past date needs to be starting from 5 days back.  Then clicking submit will display the weather conditions data.


### Unresolved Issues

- Due to the Open-Metep API limitation that does not include the past 5 days weather conditions data, I am planning to configure the date input to only show a calendar-date selections starting from the 
- 

### Future Improvements

- Displaying animated images that reflects the weather condition
- Style refinement




### Credits

Thank you to:
My instructors and classmates, OpenWeather, Open-Meteo, moment, date-fns, StackOverflow users for solution suggestions for different problems