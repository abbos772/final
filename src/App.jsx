import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import SinglePage from "./components/SinglePage/SinglePage";
import NotFound from "./components/NotFound/Not_found";
import Wishes from "./components/Wishes/Wishes";
import Cart from "./components/Cart/Cart";
import Kompaniya from "./components/Kompaniya/Kompaniya";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import About from "./components/About/About";
import Return from "./components/Return/Return";
import Garant from "./components/Garantiya/Garant";
import Kon from "./components/Kontact/Kon";
import BigBlog from "./components/BigBlog/BigBlog";
import AllPro from "./components/AllPro/AllPro";
import KatalogPage from "./components/KatalogPage/KatalogPage";
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/kompaniya" element={<Kompaniya />} />
        <Route path="/about" element={<About />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/return" element={<Return />} />
        <Route path="/conacts" element={<Kon />} />
        <Route path="/blog" element={<BigBlog />} />
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path="/allproducts" element={<AllPro />} />
        <Route path="/katalogPage" element={<KatalogPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
