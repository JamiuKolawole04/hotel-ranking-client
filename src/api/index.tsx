import axios from "../utils/axios";

import { HotelDetail } from "../pages/EditHotel";
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
  brand: string;
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

interface CreateOrGetBrandOrUpdateOrDeleteBrandResponse {
  success: boolean;
  status: string;
  nbHits?: number;
  message: string;
  data: BrandsData[] | null;
}

type GetUpdateOrCreateHotelResponse = {
  success: boolean;
  status: string;
  message: string;
  data: HotelsData[];
};

interface getDeleteHotelResponse {
  success: boolean;
  status: string;
  message: string;
  data: null;
}

export const getHotelsApi = async (url: string) => {
  const { data } = await axios<GetHotelResponse>({
    url: `${url}`,
    method: "GET",
  });

  return data;
};

export const updateHotelApi = async (url: string, hotelData: HotelDetail) => {
  const { data } = await axios<GetUpdateOrCreateHotelResponse>({
    url: `${url}`,
    method: "PATCH",
    data: hotelData,
  });

  return data;
};

export const createHotelApi = async (url: string, hotelData: HotelDetail) => {
  const { data } = await axios<GetUpdateOrCreateHotelResponse>({
    url: `${url}`,
    method: "POST",
    data: hotelData,
  });

  return data;
};

export const deleteHotelApi = async (url: string) => {
  const { data } = await axios<getDeleteHotelResponse>({
    url: `${url}`,
    method: "DELETE",
  });

  return data;
};

export const createBrandsApi = async (url: string, createBrandData: string) => {
  const { data } = await axios<CreateOrGetBrandOrUpdateOrDeleteBrandResponse>({
    url: `${url}`,
    method: "POST",
    data: {
      name: createBrandData,
    },
  });

  return data;
};

export const getBrandsApi = async (url: string) => {
  const { data } = await axios<CreateOrGetBrandOrUpdateOrDeleteBrandResponse>({
    url: `${url}`,
    method: "GET",
  });

  return data;
};

export const updateBrandsApi = async (url: string, updateBrandData: string) => {
  const { data } = await axios<CreateOrGetBrandOrUpdateOrDeleteBrandResponse>({
    url: `${url}`,
    method: "PATCH",
    data: {
      name: updateBrandData,
    },
  });

  return data;
};

export const deleteBrandsApi = async (url: string) => {
  const { data } = await axios<CreateOrGetBrandOrUpdateOrDeleteBrandResponse>({
    url: `${url}`,
    method: "DELETE",
  });

  return data;
};
