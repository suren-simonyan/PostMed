import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeaderBanner from "../../components/header/HeaderBanner";
import HeaderTopPanel from "../../components/header/HeaderTopPanel";
import './style.scss'

export default function Header() {
    const location = useLocation();
 
    console.log(location.pathname !== "/");

    return (
        <header>
            <HeaderTopPanel />
            <HeaderBanner />
            {location.pathname !== "/" && (
                <BreadCrumbs />
            ) }
        </header>
    )
}