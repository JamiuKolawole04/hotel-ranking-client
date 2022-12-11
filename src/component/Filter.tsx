import { useContext, ChangeEvent } from "react";

import { GlobalState } from "../context/globalSate";
import { BrandsData } from "../api";

export const Filter = () => {
  const state: any = useContext(GlobalState);
  const [brand, setBrand] = state.hotelApi.brand;
  const [brands] = state.brandApi.brands;

  const handleBrand = (e: ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
  };

  return (
    <div className="brand-filter__menu">
      <span>Filter by brands:</span>
      <select name="brand" id="brand" value={brand} onChange={handleBrand}>
        <option value="">All brands</option>

        {brands.map((brand: BrandsData) => (
          <option value={"brand=" + brand.name} key={brand._id}>
            {brand.name}
          </option>
        ))}
      </select>
    </div>
  );
};
