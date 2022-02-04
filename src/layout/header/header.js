import HeaderBanner from "../../components/header/HeaderBanner";
import HeaderTopPanel from "../../components/header/HeaderTopPanel";
import './style.scss'

export default function Header () {
    return (
        <header>
            <HeaderTopPanel/>
            <HeaderBanner/>
        </header>
    )
}