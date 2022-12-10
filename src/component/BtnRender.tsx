import { Fragment } from "react";
import { Link } from "react-router-dom";

export const BtnRender = ({ hotelid }: { hotelid: string }) => {
  return (
    <Fragment>
      <Link to={`/detail/${hotelid}`}>
        <button id="details-btn">details</button>
      </Link>
      <Link to={`/edit/${hotelid}`}>
        <button id="edit-btn">Edit</button>
      </Link>
    </Fragment>
  );
};
