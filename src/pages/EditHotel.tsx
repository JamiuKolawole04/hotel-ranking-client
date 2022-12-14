import {
  useContext,
  useEffect,
  useState,
  ChangeEvent,
  MouseEvent,
} from "react";
import { useParams, useNavigate } from "react-router-dom";

import { GlobalState } from "../context/globalSate";
import { HotelsData, updateHotelApi, BrandsData, deleteHotelApi } from "../api";

export interface HotelDetail {
  name: string;
  city: string;
  country: string;
  address: string;
  brand: string;
  pricePerNight: string;
  image: string;
}

export const EditHotel = () => {
  const params = useParams();
  const navigate = useNavigate();

  const initialState = {
    name: "",
    city: "",
    country: "",
    address: "",
    brand: "",
    pricePerNight: "",
  };

  const state: any = useContext(GlobalState);
  const [brands] = state.brandApi.brands;
  const [hotels]: any = state.hotelApi.hotels;
  const [callback, setCallback]: any = state.hotelApi.callback;
  const [detailHotel, setDetailHotel] = useState<HotelDetail | any>(
    initialState
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDetailHotel({
      ...detailHotel,
      [name]: value,
    });
  };

  useEffect(() => {
    if (params.hotelid) {
      hotels.forEach((hotel: HotelsData) => {
        if (hotel._id === params.hotelid) setDetailHotel(hotel);
      });
    }
  }, [params.hotelid, hotels]);

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.preventDefault();
    try {
      setLoading(true);
      const updateData = await updateHotelApi(
        `api/hotel/${detailHotel._id}`,
        detailHotel
      );

      alert(updateData.message);
      setCallback(!callback);
      navigate("/");
    } catch (err: any) {
      alert(err.response.data?.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (
    e: MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.preventDefault();
    if (window.confirm("Do you really want to delete this hotel")) {
      try {
        const deleteHotel = await deleteHotelApi(
          `api/hotel/${detailHotel._id}`
        );
        alert(deleteHotel.message);
        setCallback(!callback);
        navigate("/");
      } catch (err: any) {
        alert(err.response.data?.message);
      }
    }
  };

  return (
    <section className="edit-hotel__section d-flex sm-colum">
      <img src={detailHotel.image} alt="" />
      <form className="ml-60 sm-ml-0 form-edit">
        <div>
          <label htmlFor="name">Hotel Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={detailHotel?.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={detailHotel?.city}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id=""
            value={detailHotel?.country}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id=""
            value={detailHotel?.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="price">Price per night ($20)</label>
          <input
            type="text"
            name="pricePerNight"
            id=""
            value={detailHotel?.pricePerNight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="brand">Brand</label>
          <select name="brand" id="" onChange={handleChange}>
            <option value={detailHotel?.brand}>Please select a brand</option>

            {brands.map((brand: BrandsData) => (
              <option value={brand.name} key={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex justify-content-betwen">
          <button className="edit-btn" onClick={handleSubmit}>
            {loading ? "loading" : "UPDATE"}
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </form>
    </section>
  );
};
