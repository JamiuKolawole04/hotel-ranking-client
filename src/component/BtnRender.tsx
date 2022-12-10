import { Fragment } from "react";
import { Link } from "react-router-dom";

export const BtnRender = ({ hotelid }: { hotelid: string }) => {
  return (
    <Fragment>
      <Link to={`/detail/${hotelid}`} id="details-btn">
        <button>details</button>
      </Link>
      <Link to={`/edit/${hotelid}`} id="edit-btn">
        <button>Edit</button>
      </Link>
    </Fragment>
  );
};
