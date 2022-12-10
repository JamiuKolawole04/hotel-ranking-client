import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GlobalState } from "../context/globalSate";
import { HotelsData } from "../api";

export const DetailHotel = () => {
  const params = useParams();

  const state: any = useContext(GlobalState);
  const [hotels]: any = state.hotelApi.hotels;
  const [detailHotel, setDetailHotel] = useState<any>([]);

  useEffect(() => {
    if (params.hotelid) {
      hotels.forEach((hotel: HotelsData) => {
        if (hotel._id === params.hotelid) setDetailHotel(hotel);
      });
    }
  }, [params.hotelid, hotels]);

  if (detailHotel.length === 0) return null;
  return (
    <div className="detail-hotel__wrapper d-flex">
      <img src={detailHotel?.image} alt="" />
      <div className="ml-12">
        <h1>{detailHotel.name}</h1>
        <p>{detailHotel?.address}</p>
        <p>${detailHotel?.pricePerNight} / per night</p>
        <p>brand: {detailHotel?.brand}</p>
      </div>
    </div>
  );
};
