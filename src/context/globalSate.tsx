import { createContext, useState, ReactNode } from "react";

import { HotelApi } from "./hotelContextData";
import { BrandApi } from "./brandContextData";

export const GlobalState = createContext<string | undefined>(undefined);

export const DataProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  //   const state: string = "ok";
  const state: any = {
    hotelApi: HotelApi(),
    brandApi: BrandApi(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
