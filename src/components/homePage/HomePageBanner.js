import "./style.scss"

export default function HomePageBanner({ props }) {

    return (
        <div
            className="home-page-banner">
            <div className="home-page-banner-bgi"
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <div className="banner-texes">
                    <p className="banner-text">Healthy for the holidays</p>
                    <p className="banner-mid-text">Extra 20% off $40+</p>
                    <p className="banner-text">Health & wellness items </p>
                </div>
            </div>
        </div>
    )
}