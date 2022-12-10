import React from "react";
import { BtnRender } from "./BtnRender";

interface HotelProps {
  image: string;
  hotelName: string;
  hotelPrice: string;
  hotelid: string;
}

export const HotelItem = ({
  image,
  hotelName,
  hotelPrice,
  hotelid,
}: HotelProps) => {
  return (
    <article>
      <section className="hotel__section">
        <img src={image} alt="" />
        <p>{hotelName}</p>
        <p>${hotelPrice} / Per Night</p>
        <BtnRender hotelid={hotelid} />
      </section>
    </article>
  );
};
