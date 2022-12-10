import { useState, useEffect } from "react";

import { getHotelsApi, HotelsData } from "../api";

export const HotelApi = () => {
  const [hotels, setHotels] = useState<HotelsData[]>([]);
  const [callback, setCallback] = useState<boolean>(false);
  const [brand, setBrand] = useState<string>("");

  useEffect(() => {
    const getHotels = async () => {
      const hotels = await getHotelsApi("api/hotel");
      setHotels(hotels.data);
    };

    getHotels();
  }, [callback]);

  return {
    hotels: [hotels, setHotels],
    callback: [callback, setCallback],
    brand: [brand, setBrand],
  };
};
