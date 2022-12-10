import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./component/Header";
import { DetailHotel } from "./pages/DetailHotel";

import { Home } from "./pages";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:hotelid" element={<DetailHotel />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
