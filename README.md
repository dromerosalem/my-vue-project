# My Weather Vue App

This is a simple weather application built with Vue.js and Vuetify. It allows users to enter a city name and retrieve the current weather information for that city using an external API.

You can access the deployed version here -> https://dromerosalem.github.io/my-vue-project/

![Weather Vue App](https://i.ibb.co/bFc7WHc/weather-vue-app.png)

## Technologies Used

- Vue.js: A progressive JavaScript framework for building user interfaces.
- Vuetify: A Vue UI library that provides pre-built components following the Material Design guidelines.
- Vuex: A state management pattern and library for Vue.js applications.
- Axios: A popular HTTP client for making API requests.

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd my-weather-vue-app`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm run serve`
2. Open your web browser and visit: `http://localhost:8080` (or the URL shown in the console)
3. Enter a city name in the input field and click "Get Weather" to retrieve the current weather information for that city.

## Challenges and Achievements

- Setting up Vue.js and Vuetify to be compatible was a challenging part of the development process. It required configuring the project correctly and ensuring the components were used properly.
- The successful implementation of API calls and displaying the retrieved weather data was an achievement. It demonstrates the ability to integrate external APIs into a Vue.js application.

## Important Note

Please note that the external API currently in use may occasionally return a "503 Service Unavailable" error. In such cases, it is recommended to verify the API endpoint's availability using a tool like Postman. If the app is not working as expected, please check the API endpoint status.

