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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Example from "./Example";

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
      <div className="mt-10 m-5 p-10 h-full bg-white flex flex-wrap items-center justify-center  ">
        <Carousel
          className="w-full max-w-sm"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 m-5">
              <Card className="p-28">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <h1 className="font-semibold ">Temperture</h1>
                    <span className="text-sm font-semibold">
                      {temperture ? <h1>{temperture}°C </h1> : <h1>0°C</h1>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>{" "}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 m-5">
              <Card className="p-28">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <span className="text-sm font-semibold ">Pressure</span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {pressure ? <h4>{pressure}°C </h4> : <h4>0°C</h4>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 m-5">
              <Card className="p-28">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <span className="text-sm font-semibold ">Visibility</span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {visibility ? <h4>{visibility}°C </h4> : <h4>0°C</h4>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 m-5">
              <Card className="p-28">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <span className="text-sm font-semibold ">Sunrise</span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {sunRise ? <h4>{sunRise}°C </h4> : <h4>0°C</h4>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 m-5">
              <Card className="p-28">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <span className="text-sm font-semibold ">Sunset</span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {sunSet ? <h4>{sunSet}°C </h4> : <h4>0°C</h4>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 m-5">
              <Card className="p-28">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <span className="text-sm font-semibold ">Humidity</span>
                    <span className="text-sm font-semibold">
                      {Humidity ? <h4>{Humidity}°C </h4> : <h4>0°C</h4>}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 m-5">
              <Card className="p-28">
                <CardContent className="flex items-center justify-center p-2">
                  <div>
                    <span className="text-sm font-semibold ">Windspeed</span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {windSpeed ? <h4>{windSpeed}°C </h4> : <h4>0°C</h4>}
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
