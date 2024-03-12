import * as React from "react";
import Clouds from "../Images/Clouds.jpeg";
import Rain from "../Images/Rain.jpg";
import Clear from "../Images/Clear_Sky.jpg";
import Dirzzle from "../Images/Dizzle.jpg";
import Shower from "../Images/Showers.jpg";
import ThunderStrom from "../Images/ThunderStrom.jpg";
import Snowing from "../Images/Snowing.jpg";
import Hail from "../Images/Hail.jpg";
import Fog from "../Images/Fog.jpg";
import Mist from "../Images/Mist.jpg";
import Dust from "../Images/Dust.jpeg";
import Smoke from "../Images/Smoke.jpg";
import SandStorm from "../Images/SandStorm.jpg";
import Tornado from "../Images/Tornado.jpg";
import ErrorPage from "./Error";
import Haze from "../Images/Haze.jpg";

export default function MiddleBox(props) {
  const data3 = props.data3;
  console.log(data3);
  if (data3) {
    switch (data3) {
      case "Clouds":
        return <Card data={data3} image={Clouds} />;
      case "Rain":
        return <Card data={data3} image={Rain} />;
      case "Clear":
        return <Card data={data3} image={Clear} />;
      case "Drizzle":
        return <Card data={data3} image={Dirzzle} />;
      case "Showers":
        return <Card data={data3} image={Shower} />;
      case "Thunderstorm":
        return <Card data={data3} image={ThunderStrom} />;
      case "Snow":
        return <Card data={data3} image={Snowing} />;
      case "Sleet":
        return <Card data={data3} image={SnowImage} />;
      case "Hail":
        return <Card data={data3} image={Hail} />;
      case "Fog":
        return <Card data={data3} image={Fog} />;
      case "Mist":
        return <Card data={data3} image={Mist} />;
      case "Smoke":
        return <Card data={data3} image={Smoke} />;
      case "Dust":
        return <Card data={data3} image={Dust} />;
      case "Sandstorm":
        return <Card data={data3} image={SandStorm} />;
      case "Haze":
        return <Card data={data3} image={Haze} />;
      case "Tornado":
        return <Card data={data3} image={Tornado} />;
      default:
        return (
          <div>
            <ErrorPage />
          </div>
        );
    }
  }

  function Card(props) {
    const climate = props?.data;
    const image = props?.image;
    console.log(climate);
    return (
      <div className="flex justify-center items-center mx-auto">
        <div className="w-full max-w-sm p-5 bg-white border mx-auto border-blue-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-sm justify-center  items-center flex text-gray-500 dark:text-gray-400">
            <img className="border rounded-3xl" src={image} alt="Clouds" />
          </div>
          <div>
            <span className="flex justify-center items-center  font-bold p-5 font-serif			">
              {climate}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
