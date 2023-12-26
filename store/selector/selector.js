import { selector } from "recoil";
import { weatherState } from "../atoms/atom";

export const dataTemperture = selector({
  key: "settemp",
  get: ({ get }) => {
    const { main } = get(weatherState);
    return main?.temp;
  },
});

export const dataPressure = selector({
  key: "setpressure",
  get: ({ get }) => {
    const { main } = get(weatherState);
    return main?.pressure;
  },
});

export const dataHumidity = selector({
  key: "sethumidity",
  get: ({ get }) => {
    const { main } = get(weatherState);
    return main?.humidity;
  },
});

export const dataSunrise = selector({
  key: "setsunrise",
  get: ({ get }) => {
    const { sys } = get(weatherState);
    return sys?.sunrise;
  },
});
export const dataSunset = selector({
  key: "setsunset",
  get: ({ get }) => {
    const { sys } = get(weatherState);
    return sys?.sunset;
  },
});
export const dataVisibility = selector({
  key: "setvisibility",
  get: ({ get }) => {
    const { visibility } = get(weatherState);
    return visibility;
  },
});

export const dataClimate = selector({
  key: "setclimate",
  get: ({ get }) => {
    const { weather } = get(weatherState);
    if (weather) {
      return weather[0].main;
    } else {
      return "Loading";
    }
  },
});

export const dataLat = selector({
  key: "setlat",
  get: ({ get }) => {
    const { coord } = get(weatherState);
    return coord?.lat;
  },
});

export const dataLon = selector({
  key: "setlon",
  get: ({ get }) => {
    const { coord } = get(weatherState);
    return coord?.lon;
  },
});

export const dataTimezone = selector({
  key: "setzone",
  get: ({ get }) => {
    const { timezone } = get(weatherState);
    return timezone;
  },
});

export const dataWind = selector({
  key: "setwind",
  get: ({ get }) => {
    const { wind } = get(weatherState);
    return wind?.speed;
  },
});
