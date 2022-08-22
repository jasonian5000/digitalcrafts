const initialState = {
  weather: {
    coord: {
      lon: -95.3633,
      lat: 29.7633,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 92.26,
      feels_like: 104.86,
      temp_min: 87.82,
      temp_max: 94.33,
      pressure: 1011,
      humidity: 62,
    },
    visibility: 10000,
    wind: {
      speed: 16.11,
      deg: 180,
      gust: 27.63,
    },
    clouds: {
      all: 75,
    },
    dt: 1661193043,
    sys: {
      type: 2,
      id: 2001415,
      country: "US",
      sunrise: 1661169201,
      sunset: 1661216141,
    },
    timezone: -18000,
    id: 4699066,
    name: "Houston",
    cod: 200,
  },
  location: "Houston",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_WEATHER":
            return {...state, weather: action.payload}
        case "SET_LOCATION":
            return {...state, location: action.payload}
        default:
            return state
    }
};

export default rootReducer