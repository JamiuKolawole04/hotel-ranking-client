import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./component/Header";
import { DetailHotel } from "./pages/DetailHotel";
import { Home } from "./pages";
import { EditHotel } from "./pages/EditHotel";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:hotelid" element={<DetailHotel />} />
          <Route path="/edit/:hotelid" element={<EditHotel />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
