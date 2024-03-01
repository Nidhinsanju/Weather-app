import * as React from "react";
import Bottombox from "./Table";
import "../App.css";
import Search from "./SearchBar";
import Graph from "./Graph";
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
          latitude: position?.coords.latitude,
          longitude: position?.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div>
      <div className="lg:px-14 xl:px-28 bg-[#365CCE] transition-all duration-700 fixed right-0 left-0 z-50 top-0">
        <div className="flex justify-between  w-full max-w-screen-3xl mx-auto font-semibold h-10 px-5"></div>
        <Search />
      </div>
      <div className="mt-40">
        <MiddleBox data3={data3} />
        <Graph data2={data2} />
        <Bottombox />
      </div>
    </div>
  );
}

export default Weather;
