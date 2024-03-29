import usefetchreport from "../hooks/usefetchreport";
import { useEffect, useState } from "react";
import GetCity from "../hooks/usefetchcity";

export default function Search(pros) {
  const [city, setCity] = useState();
  const [country, setCountry] = useState("india");

  const position = pros?.position;
  const { fetchReport } = usefetchreport();

  useEffect(() => {
    const fetchData = async () => {
      if (position?.latitude !== null) {
        try {
          const value = await GetCity(position);
          fetchReport(value.city, value.county);
        } catch (error) {
          alert("Update Cordinates");
        }
      }
    };

    fetchData();
  }, [position]);

  return (
    <div className="flex justify-center items-center flex-wrap ">
      <form
        className="flex items-center sm:min-w-60 md:min-w-96 lg:min-w-96 xl:min-w-96 max-w-26 mx-auto "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search City "
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            if (city.length > 0) {
              console.log(city);
              fetchReport(city, country);
            } else {
              alert("City name cant be empty");
            }
          }}
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-lime-700 dark:hover:bg-lime-800 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
