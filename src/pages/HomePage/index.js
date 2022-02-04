import HomePageBanner from "../../components/homePage/HomePageBanner";
import img from "../../resourses/images/homePageBanner.png"

export default function HomePage () {
    return(
        <main className="home-page">
            <HomePageBanner props={{image: img }} />
        </main>
    )
}