import { selector } from "recoil";
import { weatherState } from "../assets/atoms/atom";

export const mySelector = selector({
  key: "temp",
  get: ({ get }) => {
    const temp = get(weatherState);
    return weatherState.temp;
  },
});
