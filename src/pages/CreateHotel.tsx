import { useState, ChangeEvent, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../utils/axios";
import { BrandsData } from "../api";
import { GlobalState } from "../context/globalSate";
import { createHotelApi } from "../api";

export const CreateHotel = () => {
  const navigate = useNavigate();

  const state: any = useContext(GlobalState);
  const [brands] = state.brandApi.brands;
  const [callback, setCallback]: any = state.hotelApi.callback;

  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [pricePerNight, setPricePerNight] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [image, setImage] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);

  const handleUpload = async (
    event: ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    try {
      const file = event.target.files[0];

      if (!file) return alert("File does not exist.");

      // file bigger than 1mb
      if (file.size > 1024 * 1024) return alert("Size too large!");

      if (file.type !== "image/png" && file.type !== "image/jpeg")
        return alert("File format is incorrect");

      let formData = new FormData();
      formData.append("file", file);

      setIsImageUploading(true);
      const { data } = await axios({
        method: "post",
        url: "api/image/upload",
        data: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      setImage(data?.url);
    } catch (err: any) {
      alert(err.response.data.msg);
    } finally {
      setIsImageUploading(false);
    }
  };

  const styleUpload = {
    display: image ? "block" : "none",
  };

  const handleFormSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      setLoading(true);
      const createHotelData = await createHotelApi(`api/hotel`, {
        name,
        city,
        country,
        brand,
        address,
        pricePerNight,
        image,
      });

      alert(createHotelData.message);
      setCallback(!callback);
      navigate("/");
    } catch (err: any) {
      if (err?.response?.data?.message) {
        return alert(err.response.data.message);
      }

      if (err?.response.data.errors[0].message) {
        return alert("please upload hotel image");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="create-hotel__section d-flex align-items-center sm-colum ">
      <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload} />
        {isImageUploading ? (
          <div id="file_img">loading</div>
        ) : (
          <div id="file_img" style={styleUpload}>
            <img src={image ? image : ""} alt="" />
          </div>
        )}
      </div>

      <form className="ml-60 sm-ml-0" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Hotel Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id=""
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="price">Price per night ($20)</label>
          <input
            type="text"
            name="pricePerNight"
            id=""
            value={pricePerNight}
            onChange={(e) => setPricePerNight(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="brand">Brand</label>
          <select
            name="brand"
            id=""
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option>Please select a brand</option>

            {brands.map((brand: BrandsData) => (
              <option value={brand.name} key={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <button className="create-hotel-btn">
          {loading ? "loading" : "CREATE"}
        </button>
      </form>
    </section>
  );
};
