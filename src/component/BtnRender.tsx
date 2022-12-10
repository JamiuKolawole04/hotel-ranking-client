import { Fragment } from "react";
import { Link } from "react-router-dom";

export const BtnRender = () => {
  return (
    <Fragment>
      <Link to="/" id="details-btn">
        details
      </Link>
      <Link to="/" id="edit-btn">
        Edit
      </Link>
    </Fragment>
  );
};
