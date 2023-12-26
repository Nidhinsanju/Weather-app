import * as React from "react";
import "../App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { weatherState } from "../atoms/atom";
import { useState, useEffect } from "react";
import usefetchreport from "../hooks/usefetchreport";
import { useNavigate } from "react-router-dom";

function Weather() {
  return (
    <div>
      <Search />
      <Rightbox />
      <Graph />
      <Bottombox />
    </div>
  );
}

function Search() {
  const { fetchReport } = usefetchreport();
  const [city, setCity] = useState();
  const country = "india";
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/city");
        }}
      >
        click me
      </button>
      <input
        id="City"
        type="text"
        placeholder="Search city"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={() => fetchReport(city, country)}>Search</button>
    </div>
  );
}

function Rightbox() {
  const data2 = useRecoilValue(weatherState);

  return (
    <main
      style={{
        border: "2px solid red",
        maxWidth: "10%",
        maxHeight: "13%",
        padding: "7%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>
        {data2.weather ? (
          <p>Climate:{data2.weather[0].main}</p>
        ) : (
          <p>Climate:normal</p>
        )}
      </h4>
    </main>
  );
}

function Graph() {
  // const data2 = useRecoilValue(weatherState);
  // console.log(data2, "1");
  return (
    <div>
      <main
        style={{
          border: "3px solid red",
          padding: "10%",
          maxWidth: "10%",
          display: "flex",
        }}
      >
        <h3>This is graph</h3>
      </main>
    </div>
  );
}

function Bottombox() {
  const data2 = useRecoilValue(weatherState);


  return (
    <article>
      <table>
        <tbody>
          <tr>
            <th>Temperture</th>
            <th>Max-Temp</th>
            <th>Min-Temp</th>
            <th>Sunrise </th>
            <th>Sunset</th>
            <th>Timezone</th>
            <th>Wind</th>
            <th>Humidity</th>
          </tr>
          <tr>
            <td>35.06</td>
            <td>35.06</td>
            <td>35.06</td>
            <td>35.06</td>
            <td>35.06</td>
            <td>35.06</td>
            <td>35.06</td>
            <td>35.06</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
export default Weather;
