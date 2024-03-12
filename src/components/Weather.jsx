import * as React from "react";
import Bottombox from "./Table";
import "../App.css";
import Search from "./SearchBar";
import MiddleBox from "./Middlebox";
import { useRecoilValue } from "recoil";
import { weatherState } from "../store/atoms/atom";
import { useState, useEffect } from "react";
import { dataClimate } from "../store/selector/selector";

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
      <div className="lg:px-14 xl:px-28 flex justify-center items-center bg-[#365CCE] transition-all duration-700  right-0 left-0 z-50 p-5 top-0">
        <Search position={position} />
      </div>
      <div className="mt-10">
        <MiddleBox data3={data3} />
        <Bottombox />
      </div>
    </div>
  );
}

export default Weather;
