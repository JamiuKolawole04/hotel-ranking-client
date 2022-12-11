import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./component/Header";
import { DetailHotel } from "./pages/DetailHotel";
import { Home } from "./pages";
import { EditHotel } from "./pages/EditHotel";
import { CreateHotel } from "./pages/CreateHotel";
import { CreateBrand } from "./pages/CreateBrand";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateHotel />} />
          <Route path="/detail/:hotelid" element={<DetailHotel />} />
          <Route path="/edit/:hotelid" element={<EditHotel />} />
          <Route path="/brand" element={<CreateBrand />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
