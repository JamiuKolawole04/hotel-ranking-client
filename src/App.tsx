import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./component/Header";

import { Home } from "./pages";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
