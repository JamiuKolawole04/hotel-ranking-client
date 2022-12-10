import React from "react";
import { useParams } from "react-router-dom";

export const DetailHotel = () => {
  const params = useParams();

  console.log(params);

  return <div className="detail-hotel__wrapper">DetailHotel</div>;
};
