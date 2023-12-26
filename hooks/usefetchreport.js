import axios from "axios";
import { APIKEY } from "../AccesKey/ApiKey";
import { useRecoilState } from "recoil";
import { weatherState } from "../atoms/atom";

export default function usefetchreport() {
  const [weatherReport, setWeatherReport] = useRecoilState(weatherState);
  const fetchReport = async (city, country) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
    );
    if (response) {
      setWeatherReport(response.data);
    } else {
      console.log("error");
    }
  };

  return { fetchReport };
}
