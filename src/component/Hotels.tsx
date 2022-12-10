import { useContext } from "react";

import { HotelItem } from "./HotelItem";
import { GlobalState } from "../context/globalSate";
import { HotelsData } from "../api";

export const Hotels = () => {
  const state: any = useContext(GlobalState);
  const [hotels]: HotelsData[] = state.hotelApi.hotels;

  console.log(hotels);

  return (
    <div className="hotels__container">
      {hotels.map((hotel: HotelsData) => (
        <HotelItem
          image={hotel.image}
          hotelName={hotel.name}
          hotelPrice={hotel.pricePerNight}
          key={hotel._id}
          hotelid={hotel._id}
        />
      ))}
    </div>
  );
};
