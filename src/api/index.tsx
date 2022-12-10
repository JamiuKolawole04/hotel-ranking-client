import axios from "../utils/axios";

export interface HotelsData {
  map(arg0: (hotel: HotelsData) => JSX.Element): import("react").ReactNode;
  address: string;
  city: string;
  country: string;
  name: string;
  __v: number;
  _id: string;
  image: string;
  pricePerNight: string;
}
interface GetHotelResponse {
  success: boolean;
  status: string;
  nbHits: number;
  data: HotelsData[];
}

export interface BrandsData {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface GetBrandResponse {
  success: boolean;
  status: string;
  nbHits: number;
  data: BrandsData[];
}

export const getHotelsApi = async (url: string) => {
  const { data } = await axios<GetHotelResponse>({
    url: `${url}`,
    method: "get",
  });

  return data;
};

export const getBrandsApi = async (url: string) => {
  const { data } = await axios<GetBrandResponse>({
    url: `${url}`,
    method: "get",
  });

  return data;
};
