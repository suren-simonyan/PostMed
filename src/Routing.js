import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/footer";
import Header from "./layout/header/header";
import HomePage from "./pages/HomePage";
import Products from "./pages/Product";
export default function Routing() {


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/product" exact element={<Products />} />
                <Route path="/product-detail" exact element={<ProductDetails />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}