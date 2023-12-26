import { useRecoilValue } from "recoil";
import { weatherState } from "../store/atoms/atom";
import { mySelector } from "../store/selector/selector";
import * as React from "react";

function DefaultCity() {
  const data = useRecoilValue(weatherState);
  const data1 = useRecoilValue(mySelector);
  console.log("1");
  return (
    <div>
      hi
      <div>{data1}</div>
    </div>
  );
}

export default DefaultCity;
