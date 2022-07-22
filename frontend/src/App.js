import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import DetailsPage from "./Pages/DetailsPage";
import NavBar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import LoginPage from "./Pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  console.log("user", user);

  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
          {user && <h2>Welcome, {user.user?.name}</h2>}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
