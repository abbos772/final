import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import SinglePage from "./components/SinglePage/SinglePage";
import NotFound from "./components/NotFound/Not_found";
import Wishes from "./components/Wishes/Wishes";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
