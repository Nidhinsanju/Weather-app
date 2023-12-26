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
import { weatherState } from "../store/atoms/atom";
import { useState, useEffect } from "react";
import usefetchreport from "../hooks/usefetchreport";
import { useNavigate } from "react-router-dom";
import {
  dataClimate,
  dataTemperture,
  dataSunrise,
  dataTimezone,
  dataWind,
  dataHumidity,
  dataSunset,
  dataPressure,
  dataVisibility,
} from "../store/selector/selector";

function Weather() {
  const data2 = useRecoilValue(dataSunrise);

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
  const [city, setCity] = useState("coimbatore");
  const country = "india";
  const navigate = useNavigate();
  const { fetchReport } = usefetchreport();

  return (
    <div>
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
  const data3 = useRecoilValue(dataClimate);

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
      <h4>{data3 ? <p>Climate:{data3}</p> : <p>Climate:normal</p>}</h4>
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
  const temperture = useRecoilValue(dataTemperture);
  const pressure = useRecoilValue(dataPressure);
  const timeZone = useRecoilValue(dataTimezone);
  const windSpeed = useRecoilValue(dataWind);
  const Humidity = useRecoilValue(dataHumidity);
  const sunSet = useRecoilValue(dataSunset);
  const sunRise = useRecoilValue(dataSunrise);
  const visibility = useRecoilValue(dataVisibility);

  return (
    <article>
      <table>
        <tbody>
          <tr>
            <th>Temperture</th>
            <th>Pressure</th>
            <th>Visibility</th>
            <th>Sunrise </th>
            <th>Sunset</th>
            <th>Timezone</th>
            <th>Wind</th>
            <th>Humidity</th>
          </tr>
          <tr>
            <td>{temperture ? <h4>{temperture}</h4> : <h4>0°C</h4>}</td>
            <td>{pressure ? <h4>{pressure}</h4> : <h4>0'PSI</h4>}</td>
            <td>{visibility ? <h4>{visibility}</h4> : <h4>--</h4>}</td>
            <td>{sunRise ? <h4>{sunRise}</h4> : <h4>0</h4>}</td>
            <td>{sunSet ? <h4>{sunSet}</h4> : <h4>0</h4>}</td>
            <td>{timeZone ? <h4>{timeZone}</h4> : <h4>0.00</h4>}</td>
            <td>
              {windSpeed ? <h4>{windSpeed}(m/s)</h4> : <h4>0.00(m/s)</h4>}
            </td>
            <td>{Humidity ? <h4>{Humidity}-g.m-3</h4> : <h4>0-g.m-3</h4>}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default Weather;
