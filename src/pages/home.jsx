// import { Fragment } from "react";

import { Hotels } from "../component";
import { Filter } from "../component/Filter";

export const Home = () => {
  return (
    <div className="home__wrapper">
      <Filter />
      <Hotels />
    </div>
  );
};
