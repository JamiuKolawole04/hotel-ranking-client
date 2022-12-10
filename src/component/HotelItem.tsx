import React from "react";

interface HotelProps {
  image: string;
  hotelName: string;
  hotelPrice: string;
}

export const HotelItem = ({ image, hotelName, hotelPrice }: HotelProps) => {
  return (
    <article>
      <section className="hotel__section">
        <img src={image} alt="" />
        <p>{hotelName}</p>
        <p>${hotelPrice} / Per Night</p>
      </section>
    </article>
  );
};
