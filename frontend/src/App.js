import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import DetailsPage from "./Pages/DetailsPage";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
