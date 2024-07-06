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
import Auth from "./components/Auth/Auth";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import MangeProduct from "./pages/Admin/MangeProduct/MangeProduct";
import MangeCategory from "./pages/Admin/MangeCategory/MangeCategory";
import CreateProduct from "./pages/Admin/Create/Create";

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
        <Route path="/contacts" element={<Kon />} />
        <Route path="/blog" element={<BigBlog />} />
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path="/allproducts" element={<AllPro />} />
        <Route path="/katalogPage" element={<KatalogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="mange-product" element={<MangeProduct />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="mange-category" element={<MangeCategory />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
