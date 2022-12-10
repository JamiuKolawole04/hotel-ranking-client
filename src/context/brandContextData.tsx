import { useEffect, useState } from "react";

import { getBrandsApi } from "../api";

export const BrandApi = () => {
  const [brands, setBrands] = useState<any>([]);

  useEffect(() => {
    const getBrands = async () => {
      const brands = await getBrandsApi("/api/brand");
      setBrands(brands.data);
    };

    getBrands();
  }, []);

  return {
    brands: [brands, setBrands],
  };
};
