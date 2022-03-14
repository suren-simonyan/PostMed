import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/footer";
import Header from "./layout/header/header";
import Bag from "./pages/Bag";
import Favorites from "./pages/Favorites";
import HomePage from "./pages/HomePage";
import MyAccount from "./pages/MyAccount";
import OrderConfirmation from "./pages/OrderConfirmation";
import Products from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import AccountDetails from './components/accountDetails/AccountDetails';
import AccountOrders from './components/accountOrders/AccountOrders';
import AccountAddresses from "./components/accountAddresses/AccountAddresses";

export default function Routing() {


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/bag" element={<Bag />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/my-account/*" element={<MyAccount />}>
                    <Route path="account-details" element={<AccountDetails />} />
                    <Route path="my-orders" element={<AccountOrders />} />
                    <Route path="account-addresses" element={<AccountAddresses />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}