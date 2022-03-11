import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/footer";
import Header from "./layout/header/header";
import Bag from "./pages/Bag";
import Favorites from "./pages/Favorites";
import HomePage from "./pages/HomePage";
import OrderConfirmation from "./pages/OrderConfirmation";
import Products from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

export default function Routing() {


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/product" exact element={<Products />} />
                <Route path="/product-details" exact element={<ProductDetails />} />
                <Route path="/bag" exact element={<Bag />} />
                <Route path="/favorites" exact element={<Favorites />} />
                <Route path="/order-confirmation" exact element={<OrderConfirmation />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}