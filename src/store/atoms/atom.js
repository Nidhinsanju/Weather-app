import { atom } from "recoil";

export const weatherState = atom({
  key: "WeatherReport",
  default: {
    isLoading: true,
    weatherData: [],
  },
});
