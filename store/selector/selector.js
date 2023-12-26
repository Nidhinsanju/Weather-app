import { selector } from "recoil";
import { weatherState } from "../atoms/atom";

export const mySelector = selector(
  {
    key: "temp",
    get: ({ get }) => {
      const { id } = get(weatherState);
      return id;
    },
  },
  {
    key: "sunrise",
    get: ({ get }) => {
      const rise = get(weatherState);
      return rise;
    },
  }
);
