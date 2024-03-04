import * as React from "react";
import Bottombox from "./Table";
import "../App.css";
import Search from "./SearchBar";
import MiddleBox from "./Middlebox";
import { useRecoilValue } from "recoil";
import { weatherState } from "../store/atoms/atom";
import { useState, useEffect } from "react";
import { dataClimate } from "../store/selector/selector";
import GetCity from "../hooks/usefetchcity";

function Weather() {
  const data2 = useRecoilValue(weatherState);
  const data3 = useRecoilValue(dataClimate);
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation?.getCurrentPosition(function (position) {
        setPosition({
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
        });
      });
    }
  }, []);

  return (
    <div>
      <div className="lg:px-14 xl:px-28 bg-[#365CCE] transition-all duration-700  right-0 left-0 z-50 top-0">
        <Search position={position} />
        <div className="flex justify-between  w-full max-w-screen-3xl mx-auto font-semibold h-10 px-5"></div>
      </div>
      <div className="mt-10">
        <MiddleBox data3={data3} />
        <Bottombox />
      </div>
    </div>
  );
}

export default Weather;
