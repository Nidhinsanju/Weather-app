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
import { useRecoilValue } from "recoil";

export default function Bottombox() {
  const temperture = useRecoilValue(dataTemperture);
  const pressure = useRecoilValue(dataPressure);
  const timeZone = useRecoilValue(dataTimezone);
  const windSpeed = useRecoilValue(dataWind);
  const Humidity = useRecoilValue(dataHumidity);
  const sunSet = useRecoilValue(dataSunset);
  const sunRise = useRecoilValue(dataSunrise);
  const visibility = useRecoilValue(dataVisibility);
  const celius = temperture - 273.15;
  const decimal = parseFloat(celius).toFixed(2);

  return (
    <article>
      <div className="   h-full bg-white flex flex-wrap items-center justify-center p-3 ">
        <div className="lg:min-w-[1022px] xl:min-w-[1230px] 2xl:min-w-[1530px]">
          <div className="w-full  px-2 max-w-[453px] mx-auto"></div>
          <div className="flex items-center justify-center">
            <table className="sm:inline-table w-full flex flex-row sm:bg-white  overflow-hidden ">
              <thead className="text-black">
                <tr className="bg-[#222E3A]/[6%] flex flex-col sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ">
                  <th className="py-3 px-5 text-left border border-b rounded-tl-lg sm:rounded-none">
                    Temperture
                  </th>
                  <th className="py-3 px-5 text-left border border-b">
                    Pressure
                  </th>
                  <th className="py-3 px-5 text-left border border-b">
                    Visibility
                  </th>
                  <th className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none">
                    Sunrise
                  </th>
                  <th className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none">
                    Sunset
                  </th>
                  <th className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none">
                    Timezone
                  </th>
                  <th className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none">
                    Windspeed
                  </th>
                  <th className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none">
                    Humidity
                  </th>
                </tr>
              </thead>
              <tbody className="flex-1 sm:flex-none">
                <tr className="flex flex-col sm:table-row mb-2 sm:mb-0">
                  <td className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5">
                    {temperture ? <h4>{decimal}°C </h4> : <h4>0°C</h4>}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                    {pressure ? <h4>{pressure}°C </h4> : <h4>0°C</h4>}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                    {visibility ? <h4>{visibility}°C </h4> : <h4>0°C</h4>}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                    {sunRise ? <h4>{sunRise}°C </h4> : <h4>0°C</h4>}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                    {sunSet ? <h4>{sunSet}°C </h4> : <h4>0°C</h4>}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                    {timeZone ? <h4>{timeZone}°C </h4> : <h4>0°C</h4>}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                    {windSpeed ? <h4>{windSpeed}°C </h4> : <h4>0°C</h4>}
                  </td>{" "}
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                    {Humidity ? <h4>{Humidity}°C </h4> : <h4>0°C</h4>}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
}
