import axios from "axios";
import { useRecoilState } from "recoil";
import { weatherState } from "../store/atoms/atom";

export default function usefetchreport() {
  const APIKEY = import.meta.env?.VITE_APIKEY;
  const [weatherReport, setWeatherReport] = useRecoilState(weatherState);
  const fetchReport = async (city, country) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
      );
      if (response) {
        setWeatherReport(response.data);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
      console.log("error");
    }
  };

  return { fetchReport };
}
