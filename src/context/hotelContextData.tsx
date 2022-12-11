import { useState, useEffect } from "react";

import { getHotelsApi, HotelsData } from "../api";

export const HotelApi = () => {
  const [hotels, setHotels] = useState<HotelsData[]>([]);
  const [callback, setCallback] = useState<boolean>(false);
  const [brand, setBrand] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getHotels = async () => {
      try {
        setLoading(true);
        const hotels = await getHotelsApi(`api/hotel?${brand}`);
        setHotels(hotels.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getHotels();
  }, [callback, brand]);

  return {
    hotels: [hotels, setHotels],
    callback: [callback, setCallback],
    brand: [brand, setBrand],
    loading: [loading, setLoading],
  };
};
