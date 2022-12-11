import { useState, useContext, FormEvent } from "react";

import { GlobalState } from "../context/globalSate";
import {
  BrandsData,
  updateBrandsApi,
  deleteBrandsApi,
  createBrandsApi,
} from "../api";

export const CreateBrand = () => {
  const [brandName, setBrandName] = useState<string>("");
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [iD, setID] = useState<string>("");

  const state: any = useContext(GlobalState);
  const [brands] = state.brandApi.brands;
  const [callback, setCallback]: any = state.brandApi.callback;

  const handleCreateBrands = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onEdit) {
      try {
        const editBrand = await updateBrandsApi(`api/brand/${iD}`, brandName);
        setOnEdit(false);
        setCallback(!callback);
        setBrandName("");
        alert(editBrand.message);
      } catch (err: any) {
        alert(err.response.data.message);
      }
    } else {
      try {
        const createBrand = await createBrandsApi(`api/brand`, brandName);
        setOnEdit(false);
        setBrandName("");
        setCallback(!callback);
        alert(createBrand.message);
      } catch (err: any) {
        alert(err.response.data.message);
      }
    }
  };

  const editBrand = async (id: string, name: string): Promise<void> => {
    setID(id);
    setBrandName(name);
    setOnEdit(true);
  };

  const deleteBrand = async (id: string) => {
    if (window.confirm("do you reaaly want to delete this brand?")) {
      try {
        const deleteBrand = await deleteBrandsApi(`api/brand/${id}`);
        setCallback(!callback);

        alert(deleteBrand.message);
      } catch (err: any) {
        console.log(err);
        alert(err.response.data.message);
      }
    }
  };

  return (
    <section className="brands-section d-flex align-items-center justify-content-around">
      <form onSubmit={handleCreateBrands}>
        <label htmlFor="brands">Brands</label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={brandName}
          onChange={({ target }) => setBrandName(target.value)}
        />

        <button type="submit" id="brand-create">
          {onEdit ? "Update" : "Create"}
        </button>
      </form>

      <div>
        {brands.map((brand: BrandsData) => (
          <div
            className="d-flex align-items-center justify-content-betwen brands-list"
            key={brand._id}
          >
            <p>{brand.name}</p>
            <div>
              <button
                id="edit-brands-btn"
                onClick={() => editBrand(brand._id, brand.name)}
              >
                Edit
              </button>
              <button
                id="delete-brands-btn"
                onClick={() => deleteBrand(brand._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
