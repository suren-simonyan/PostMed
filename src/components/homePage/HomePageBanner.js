import "./style.scss"

export default function HomePageBanner({ props }) {

    return (
        <div className="home-page-banner"
            style={{ backgroundImage: `url(${props.image})` }}
            className="home-page-banner">

        </div>
    )
}