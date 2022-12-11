import { useEffect, useState } from "react";

import { getBrandsApi } from "../api";

export const BrandApi = () => {
  const [brands, setBrands] = useState<any>([]);
  const [callback, setCallback] = useState<boolean>(false);

  useEffect(() => {
    const getBrands = async () => {
      const brands = await getBrandsApi("/api/brand");
      setBrands(brands.data);
    };

    getBrands();
  }, [callback]);

  return {
    brands: [brands, setBrands],
    callback: [callback, setCallback],
  };
};
