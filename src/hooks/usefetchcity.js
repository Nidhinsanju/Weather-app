import axios from "axios";
import { useEffect } from "react";

export default async function GetCity(position) {
  const lat = position?.latitude; // Example latitude
  const lng = position?.longitude; // Example longitude
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();
    const city = data?.address.city;
    const county = data?.address.country;
    if (city && county) {
      return { city, county };
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
}
