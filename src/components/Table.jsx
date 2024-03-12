import {
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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
  const sunSetDate = new Date(sunSet * 1000);
  const sunRiseData = new Date(sunRise * 1000);
  const hours1 = sunRiseData.getHours().toString().padStart(2, "0");
  const minutes1 = sunRiseData.getMinutes().toString().padStart(2, "0");
  const hours = sunSetDate.getHours().toString().padStart(2, "0");
  const minutes = sunSetDate.getMinutes().toString().padStart(2, "0");
  const sunRiseime = `${hours1}:${minutes1}`;
  const sunSetime = `${hours}:${minutes}`;

  return (
    <article>
      <div className="mt-10 m-5 p-10 h-full flex flex-wrap items-center justify-center  ">
        <Carousel
          className="w-full max-w-sm "
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-2/3 lg:basis-4/4 m-5  ">
              <Card className="p-2">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <h1 className="font-semibold ">Temperture</h1>
                    <img
                      className="w-full  min-h-52 max-h-52 object-fill"
                      alt="Temperture Image"
                      src="https://previews.123rf.com/images/igoun/igoun2003/igoun200300143/142778011-thermometer-icon-in-trendy-flat-design-simple-sign-of-temperature-measuring-weather-indicator.jpg"
                    />
                    <span className="text-sm font-semibold">
                      {decimal ? <h1>{decimal}°C </h1> : <h1>0°C</h1>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-2/3 lg:basis-4/4 m-5  ">
              <Card className="p-2">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <h1 className="text-sm font-semibold ">Pressure</h1>
                    <img
                      className="w-full  min-h-52 max-h-52 object-fill"
                      alt="Temperture Image"
                      src="https://www.shutterstock.com/image-vector/atmospheric-pressure-line-icon-outline-260nw-716113417.jpg"
                    />
                    <span className="text-sm font-semibold">
                      {" "}
                      {pressure ? <h4>{pressure} (mb) </h4> : <h4> (mb),</h4>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-2/3 lg:basis-4/4 m-5  ">
              <Card className="p-2">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <h1 className="text-sm font-semibold ">Visibility</h1>
                    <img
                      className="w-full  min-h-52 max-h-52 object-fill"
                      alt="Temperture Image"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PWiVuuxEJzhTw_kCr8nf3R3ASpf6EhnOV1XkYEWS0TKL7aWCNO4M4aa4Y0KfzuCypyU&usqp=CAU"
                    />
                    <span className="text-sm font-semibold">
                      {" "}
                      {visibility ? <h4>{visibility}(m) </h4> : <h4>(m)</h4>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-2/3 lg:basis-4/4 m-5  ">
              <Card className="p-2">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <h1 className="text-sm font-semibold ">Sunrise</h1>
                    <img
                      className="w-full  min-h-52 max-h-52 object-fill"
                      alt="Temperture Image"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuL3chZRpIFuaZvF7w9-WaxxqVfbYndfP8GVnuVPVJBcFmr9VCHgoax2lMC5vFA4aMBGQ&usqp=CAU"
                    />
                    <span className="text-sm font-semibold">
                      {" "}
                      {sunRiseime ? <h4>{sunRiseime}⏰ </h4> : <h4>⏰ </h4>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-2/3 lg:basis-4/4 m-5  ">
              <Card className="p-2">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <h1 className="text-sm font-semibold ">Sunset</h1>
                    <img
                      className="w-full  min-h-52 max-h-52 object-fill"
                      alt="Temperture Image"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVEX1RTj-OAayTN2GJLTkxpqU6IuxaEiXz1CTQfYLWVm3SMrvoUPyUN-_KlJiQxGKvec&usqp=CAU"
                    />
                    <span className="text-sm font-semibold">
                      {" "}
                      {sunSetime ? <h4>{sunSetime}⏲ </h4> : <h4>⏲</h4>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-2/3 lg:basis-4/4 m-5  ">
              <Card className="p-2">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <h1 className="text-sm font-semibold ">Humidity</h1>
                    <img
                      className="w-full  min-h-52 max-h-52 object-fill"
                      alt="Temperture Image"
                      src="https://cdn.vectorstock.com/i/preview-1x/76/62/humidity-percentage-icon-vector-39587662.jpg"
                    />
                    <span className="text-sm font-semibold">
                      {Humidity ? (
                        <h4>{Humidity}( g.m-3) </h4>
                      ) : (
                        <h4>0 ( g.m-3)</h4>
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-2/3 lg:basis-4/4 m-5  ">
              <Card className="p-2">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <h1 className="text-sm font-semibold ">Windspeed</h1>
                    <img
                      className="w-full  min-h-52 max-h-52 object-fit"
                      alt="Temperture Image"
                      src="https://media.istockphoto.com/id/1222702106/vector/weather-forecast-line-icon-of-wind-isolated-on-white-background-weather-symbol-in-modern.jpg?s=170667a&w=0&k=20&c=6o3S4ndbVDlXwrEjWz50spkXm0m3JPBth1Xmlz_nBAg="
                    />
                    <span className="text-sm font-semibold">
                      {" "}
                      {windSpeed ? (
                        <h4>{windSpeed}(km/h) </h4>
                      ) : (
                        <h4>0(km/h)</h4>
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </article>
  );
}
