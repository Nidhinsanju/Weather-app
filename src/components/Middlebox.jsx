import * as React from "react";

export default function MiddleBox(props) {
  const data3 = props.data3;

  return (
    <div className="ml-60 ">
      <div className="w-full max-w-sm bg-white border border-blue-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?cs=srgb&dl=pexels-pixabay-53594.jpg&fm=jpg"
            alt="Cloud Image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data3}
          </span>
          <div className="flex mt-4 md:mt-6"></div>
        </div>
      </div>
    </div>
  );
}
