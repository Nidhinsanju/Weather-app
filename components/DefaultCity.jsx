import { useRecoilValue } from "recoil";
import { weatherState } from "../atoms/atom";
import * as React from "react";

function DefaultCity() {
  const data = useRecoilValue(weatherState);
  console.log(data,"1");
  return <div>hi</div>;
}

export default DefaultCity;
